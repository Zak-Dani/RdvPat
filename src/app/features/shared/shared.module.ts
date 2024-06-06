import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { routerReducers } from "./router-store";
import { CustomRouterStateSerializer } from "./router-store";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import {SharedService} from './shared.service';

const storeRouter = [
  StoreModule.forFeature("router", routerReducers),
  StoreRouterConnectingModule.forRoot({
    serializer: CustomRouterStateSerializer,
  }),
];
@NgModule({
  imports: storeRouter,
  providers: [SharedService]
})
export class SharedModule {}
