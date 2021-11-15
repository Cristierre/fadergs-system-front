import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor() { }
  getRooms(){
    return of([
      {
        status:0,
        description:'2 beds and 1 bathroom',
        price:100,
        created_at:'2021-11-15 15:04:38',
        updated_at: null        
      },
      {
        status:0,
        description:'1 beds and 1 bathroom',
        price:309,
        created_at:'2021-11-11 15:04:38',
        updated_at: null        
      }
    ])
  }
}
