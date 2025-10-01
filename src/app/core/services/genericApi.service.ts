import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../constants/environment';

export class GenericApiService<T> {
  protected baseUrl = environment.apiUrl;

  // 👈 هيدرز افتراضية لكل request
  protected defaultHeaders = new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  });

  constructor(
    protected http: HttpClient,
    protected endpoint: string // endpoint نسبي فقط
  ) {}

  private get fullUrl(): string {
    return `${this.baseUrl}${this.endpoint}`;
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.fullUrl}/`, { headers: this.defaultHeaders });
  }

  getItem(id: number | string): Observable<T> {
    return this.http.get<T>(`${this.fullUrl}/${id}`, { headers: this.defaultHeaders });
  }

  create(data: T): Observable<T> {
    return this.http.post<T>(`${this.fullUrl}/`, data, { headers: this.defaultHeaders });
  }

  update(id: number | string, data: T): Observable<T> {
    return this.http.patch<T>(`${this.fullUrl}/${id}/`, data, { headers: this.defaultHeaders });
  }

  delete(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.fullUrl}/${id}/`, { headers: this.defaultHeaders });
  }
}
