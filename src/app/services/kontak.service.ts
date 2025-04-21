import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Kontak {
  id: string;
  nama: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class KontakService {
  private apiUrl = 'http://localhost:3001/kontak'
  constructor(private http: HttpClient) {}

  getKontak(): Observable<Kontak[]> {
    return this.http.get<Kontak[]>(this.apiUrl);
  }

  hapusKontak(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
