import { Injectable } from '@nestjs/common';
import { IUserDAL } from '../i_data_access_layer/i.user.dal';

@Injectable()
export class UserDataAccessLayer implements IUserDAL {
  public async getUserDetails(): Promise<string> {
    return 'Token is generated';
  }
}
