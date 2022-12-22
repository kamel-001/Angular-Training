import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {

  constructor() { }
  @Input()
  roomList: RoomList[] = []

  @Output()
  selectedRoom = new EventEmitter<RoomList>();

  ngOnInit(): void {

  }
  selectRoom(room : RoomList){
  this.selectedRoom.emit(room)
  }

}
