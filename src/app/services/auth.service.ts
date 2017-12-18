export class AuthService {

  isLoggedIn = false;

  // async code via Promise - emulate server request
  isAuth() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 1000);
    } );
  }

  logIn() {
    this.isLoggedIn = true;
  }

  logOut() {
    this.isLoggedIn = false;
  }

}
