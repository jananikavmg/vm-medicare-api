import { Inject, Injectable } from '@nestjs/common';
import { IAuthRepository } from '../i_repositories/i.auth.repository';
import {
  USER_DAL,
  IUserDAL,
} from '../i_data_access_layer/i.user.dal';

@Injectable()
export class AuthRepository implements IAuthRepository {

  constructor(
    @Inject(USER_DAL)
    private readonly _userDal: IUserDAL,
  ) {}
  
  public async getToken(): Promise<string> {
    return await this._userDal.getUserDetails();
  }
}
