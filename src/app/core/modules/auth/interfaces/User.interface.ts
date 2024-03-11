export interface User {
  id:       number;
  username: string;
  token:    string;
  rol:      Rol;
  name:     string;
}

export interface Rol {
  id:                       number;
  name:                     string;
}
