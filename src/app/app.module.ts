import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EventListComponent} from './events/event-list.component';
import { EventAppComponent } from './event-app.component';
import {EventThumbnailComponent} from './events/event-thumbnail.component'

@NgModule({
  declarations: [
    EventAppComponent,
    EventListComponent,
    EventThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
