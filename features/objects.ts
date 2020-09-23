const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

//Destructuring
const { age }: { age: number; name: string } = profile;

//Destructuring
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;