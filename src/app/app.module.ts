import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AgmCoreModule } from "@agm/core";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAVDy2m1GWE7nHQJl1MdGLVlkZ6znEd4gY",
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
