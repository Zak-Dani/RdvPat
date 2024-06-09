import { Routes } from '@angular/router';
import {
  HomeComponent,
} from './containers';

export const routes: Routes = [
  {
    path: '',

    component: HomeComponent,

    children: [

    ],
  },
];
