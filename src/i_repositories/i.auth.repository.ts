export const AUTH_REPOSITORY = 'AUTH REPOSITORY';

export interface IAuthRepository {
    getToken(): Promise<string>;
  }