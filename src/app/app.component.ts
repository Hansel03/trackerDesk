import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  lat = 0;
  lng = 0;
  zoom = 15;
  title = "trackerDesk";
}
