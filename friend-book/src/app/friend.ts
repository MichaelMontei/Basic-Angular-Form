export class Friend {
  firstName : string | null;
  lastName : string | null;
  email : string | null;
  phoneNumber : number | null;
  favouriteLanguage : string | null;

  constructor(firstName : string | null, lastName : string | null, email : string | null, phoneNumber : number | null, favouriteLanguage : string | null) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.favouriteLanguage = favouriteLanguage;
  }
}
