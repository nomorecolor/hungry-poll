export interface User {
  id: string;
  name: string;
  imageUrl: string;
}

export interface UserInfo {
  info: {
    sub: string;
    email: string;
    name: string;
    picture: string;
  };
}
