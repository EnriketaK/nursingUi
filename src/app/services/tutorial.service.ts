import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormSummaryDto, FormUi, FormSummary } from '../models/tutorial.model';

const baseUrl = 'http://localhost:8080/api/nursing';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  get_suggestion(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/suggestion`, data);
  }

  get_translated_summaries(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/translated-sum`, data);
  }

  save_admission_form(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/save-admission`, data);
  }
  
  save_summary(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/save-summary`, data);
  }

  getAll(): Observable<FormUi[]> {
    return this.http.get<FormUi[]>(baseUrl);
  }

  getForm(id: any): Observable<FormUi> {
    return this.http.get<FormUi>(`${baseUrl}/${id}`);
  }

  getSummaries(id: any): Observable<FormSummary[]> {
    return this.http.get<FormSummary[]>(`${baseUrl}/summaries/formId/${id}`);
  }

  updateForm(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<FormUi[]> {
    return this.http.get<FormUi[]>(`${baseUrl}?title=${title}`);
  }
}