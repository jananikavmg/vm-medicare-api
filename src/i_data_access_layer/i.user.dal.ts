export const USER_DAL = 'USER DAL';

export interface IUserDAL {
    getUserDetails(): Promise<string>;
  }