import { Component, OnInit } from "@angular/core";
import { TaxistasService } from "./services/taxistas.service";

export interface Taxista {
  nombre: string;
  clave: string;
  lat: number;
  lng: number;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  lat = 0;
  lng = 0;
  zoom = 15;
  title = "trackerDesk";
  taxistas: Taxista[] = [];
  initMap = false;

  constructor(private taxistasService: TaxistasService) {}

  ngOnInit() {
    this.constultarTaxistas();
  }

  constultarTaxistas() {
    this.taxistasService.consultarTaxistas().subscribe((data: Taxista[]) => {
      this.taxistas = data;
      if (!this.initMap) {
        this.lat = data[0].lat;
        this.lng = data[0].lng;
      }
    });
  }
}
