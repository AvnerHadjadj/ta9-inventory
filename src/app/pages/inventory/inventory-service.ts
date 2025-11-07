import { inject, Injectable } from '@angular/core';
import { InventoryEvent } from './inventory.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

const API_URL = "/mock-events.json";

@Injectable({ providedIn: "root" })
export class InventoryService {
  readonly http = inject(HttpClient);

  getEvents(): Observable<InventoryEvent[]> {
    return this.http.get<InventoryEvent[]>(API_URL);
  }
}
