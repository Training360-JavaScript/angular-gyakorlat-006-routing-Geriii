import { Injectable } from '@angular/core';
import { Event } from './../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() {}

  getAll(): Event[] {
      const events: Event[] = [
        {
          name: 'breach',
          date: '2020.01.20',
          time: '17:52:00',
          location: {
            address: 'Specific street',
            city: 'Vuhan',
            country: 'China'
          },
        },
        {
          name: 'repeat',
          date: '2021.01.16',
          time: '11:12:00',
          location: {
            address: 'all streets',
            city: 'All cities',
            country: 'every country'
          },
        },
        {
          name: 'random',
          date: '2022.01.25',
          time: '15:34:42',
          location: {
            address: 'Romans street',
            city: 'Goed',
            country: 'Hungary'
          }
        }
      ]

      return events;
    }
   }

