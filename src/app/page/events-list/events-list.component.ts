import { Component, OnInit } from '@angular/core';
import { Event } from './../../model/event';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  eventList: Event[] = [];
  constructor(private EventService: EventService) {
    this.eventList = EventService.getAll();
   }

  ngOnInit(): void {
  }

}
