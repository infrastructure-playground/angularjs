export class User {
  public username: string;
  public password: string;
  public email: string;
  public first_name: string;
  public last_name: string;
  public token: string;

  constructor(username: string, password: string, email: string,
              first_name: string, last_name: string, token: string) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.first_name = first_name;
    this.last_name = last_name;
    this.token = token;
  }
}
