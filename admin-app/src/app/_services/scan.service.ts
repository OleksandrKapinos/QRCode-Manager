import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Scan } from '../_models';
import {environment} from '../../environments/environment.dev';
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class ScanService {
    constructor(private http: HttpClient) { }

    scanCode(body): Observable<any> {
        return this.http.post(`${environment.apiUrl}/scans/scan`, body);
    }

    // getAll() {
    //     return this.http.get<User[]>(`${environment.apiUrl}/users`);
    // }
    //
    // register(user: User) {
    //     return this.http.post(`${environment.apiUrl}/users/register`, user);
    // }
    //
    // delete(id: number) {
    //     return this.http.delete(`${environment.apiUrl}/users/${id}`);
    // }
}
