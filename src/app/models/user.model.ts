export class User {
      constructor(
            public username: string,
            public email: string,
            public id: number,
            private _token: string
      ) { }

      get token() {
            return this._token;
      }
}