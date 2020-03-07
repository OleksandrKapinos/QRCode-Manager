const db = require('_helpers/db');
const moment = require('moment');

const Scan = db.Scan;

module.exports = {
    scan,
    list
};

async function scan(scanParam) {

    if(await Scan.findOne({ idScan: scanParam.idScan })) {
        const scan = await Scan.findOne({ idScan: scanParam.idScan });

        if( scan.enterStatus === false ) {
            await scan.update({ enterStatus: true });
            await scan.update({ enterTime: Date.now() });
        } else if(scan.enterStatus === true) {
            await scan.update({ enterStatus: false });
            const d1 = await new Date(moment(scan.enterTime).format('YYYY-MM-DD hh:mm'));
            const d2 = await new Date(moment(Date.now()).format('YYYY-MM-DD hh:mm'));
            const timeEdge = await d2 - d1;
            const min = await Math.floor(timeEdge / 60000);
            const hrs = await Math.floor(min / 60);
            const mins = await min % 60;
            const workedTime = await `${hrs}.${mins}`;
            const allHours = await scan.wortHours + Number(workedTime);
            await scan.update({ wortHours: allHours});
            console.log('scan.wortHours', scan.wortHours);
            const calcSalary = await allHours * scan.salaryHour;
            console.log('calcSalary', calcSalary);
            await scan.update({ salary: calcSalary});
        }
        const scanUpdate =  await Object.assign(scan, scanParam);
        await scanUpdate.save();
    } else {
        const scan = new Scan(scanParam);
        await scan.save();
    }
}

async function list() {
    console.log(111111);
    // return await Scan.find().select('idScan');
}


