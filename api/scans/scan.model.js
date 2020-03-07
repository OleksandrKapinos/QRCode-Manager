const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scanSchema = new Schema(
  {
    idScan: { type: Number, default: null, unique: true, required: true},
    firstName: { type: String },
    lastName: { type: String },
    position: { type: String },
    salaryHour: { type: Number },
    salary: { type: Number, default: 0 },
    wortHours: { type: Number, default: 0 },
    enterStatus: { type: Boolean, default: true },
    enterTime: { type: Date, default: Date.now },
    createdDate: { type: Date, default: Date.now }
    }
);

scanSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Scan', scanSchema);

