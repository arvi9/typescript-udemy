import faker, { fake } from "faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  companyName: string;
  cathPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = faker.company.companyName();
    this.cathPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `
    <div>
    <h1>Company Name: ${this.companyName}</h1>
    <h3>Catchphase: ${this.cathPhrase}</h3>
    </div>
    `;
  }
}
