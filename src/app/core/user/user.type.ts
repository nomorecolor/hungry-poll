export interface User {
  id: string;
  firstName: string;
  lastName: string;
  displayName?: string;
  email: string;
  externalId: string;
  imageUrl: string;
}

export interface UserProfile {
  info: {
    sub: string;
    email: string;
    given_name: string;
    family_name: string;
    picture: string;
  };
}
