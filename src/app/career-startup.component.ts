import { Component } from '@angular/core';
import { HomeComponent } from './+home';
import { Routes , ROUTER_DIRECTIVES} from '@angular/router';
import { SearchbyComponent } from './+searchby';
import { AddEducationComponent } from './+add-education';

@Component({
  moduleId: module.id,
  selector: 'career-startup-app',
  templateUrl: 'career-startup.component.html',
  styleUrls: ['career-startup.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/home', component: HomeComponent},
  {path: '/searchby', component: SearchbyComponent},
  {path: '/add-education', component: AddEducationComponent}
])
export class CareerStartupAppComponent {
  title = 'career-startup works!';
}
