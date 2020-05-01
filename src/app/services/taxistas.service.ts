import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class TaxistasService {
  constructor(private firestore: AngularFirestore) {}

  consultarTaxistas() {
    return this.firestore.collection("usuarios").valueChanges();
  }
}
