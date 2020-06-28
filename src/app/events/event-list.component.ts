import { Component } from '@angular/core';
@Component({
  selector: 'event-list',
  template: `
   <div>
  <h1>Upcoming Angular Events</h1>
  <hr />
  <event-thumbnail [event]=event1  ></event-thumbnail>
  </div>
  `,
})
export class EventListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '28/06/2020',
    time: '10:19 pm',
    price: 899.9,
    imageUrl: '/assets/images/Button-White-Large.png',
    location: {
      address: '1057 DT',
      city: 'Aligarh',
      country: 'India',
    },
  };
}
