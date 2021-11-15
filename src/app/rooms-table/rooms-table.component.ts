import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-rooms-table',
  templateUrl: './rooms-table.component.html',
  styleUrls: ['./rooms-table.component.css']
})
export class RoomsTableComponent implements OnInit {

  rooms: Observable<any> | undefined;

  displayedColumns: String[] = ["description", "price", "created_at", "updated_at", "status", "reservar"];

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms() {
    this.rooms = this.roomsService.getRooms();
  }
  
  onClickReservar(element:any){
    //TODO criar implementação da reserva mudar status
    
  }

}
