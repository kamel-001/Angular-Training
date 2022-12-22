import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {


  // angular interpoletion

  hotelName = "hilton hotel"

  numberOfRooms = 10;

  hideRooms = false;
  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 30,
    availableRooms: 10,
    bookedRooms: 20

  }

  roomList: RoomList[] = []
  constructor() { }

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe room',
        amenities: 'whateever whatever',
        price: 700,
        photos: 'https://www.thespruce.com/thmb/iMt63n8NGCojUETr6-T8oj-5-ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg',
        checkInTime: new Date('11-Nov-2020'),
        checkoutTime: new Date('14-Nov-2020'),
      },
      {
        roomNumber: 2,
        roomType: 'Normal room',
        amenities: 'whateever whatever',
        price: 100,
        photos: 'https://www.thespruce.com/thmb/iMt63n8NGCojUETr6-T8oj-5-ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg',
        checkInTime: new Date('11-Nov-2020'),
        checkoutTime: new Date('14-Nov-2020'),
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'whateever whatever',
        price: 7000,
        photos: 'https://www.thespruce.com/thmb/iMt63n8NGCojUETr6-T8oj-5-ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg',
        checkInTime: new Date('11-Nov-2020'),
        checkoutTime: new Date('14-Nov-2020'),
      },
      {
        roomNumber: 4,
        roomType: 'None Private Suite',
        amenities: 'whateever whatever',
        price: 7000,
        photos: 'https://www.thespruce.com/thmb/iMt63n8NGCojUETr6-T8oj-5-ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg',
        checkInTime: new Date('11-Nov-2020'),
        checkoutTime: new Date('14-Nov-2020'),
      },
    ]
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  selectRoom(room :RoomList){
    this.selectedRoom = room;
  }

}
