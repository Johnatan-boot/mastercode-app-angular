import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EntityService {
  private entitiesSubject = new BehaviorSubject<any[]>([]);
  private data: any[] = [
    { id: 1, nome: 'João', email: 'joao@email.com' },
    { id: 2, nome: 'Maria', email: 'maria@email.com' },
  ];

  constructor() {
    this.entitiesSubject.next(this.data);
  }

  getEntities(): Observable<any[]> {
    return this.entitiesSubject.asObservable();
  }

  addEntity(entity: any) {
    entity.id = Date.now();
    this.data.push(entity);
    this.entitiesSubject.next(this.data);
  }

  updateEntity(updated: any) {
    const index = this.data.findIndex(e => e.id === updated.id);
    if (index >= 0) {
      this.data[index] = updated;
      this.entitiesSubject.next(this.data);
    }
  }

  deleteEntity(id: number) {
    this.data = this.data.filter(e => e.id !== id);
    this.entitiesSubject.next(this.data);
  }
}
