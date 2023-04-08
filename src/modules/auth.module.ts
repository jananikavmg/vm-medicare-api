import { Module } from '@nestjs/common';
import { AuthController } from '../controllers/auth.controller';
import { AuthRepository } from '../repositories/auth.repository';
import { AUTH_REPOSITORY } from '../i_repositories/i.auth.repository';
import { UserDataAccessLayer } from '../data_access_layer/user.dal';
import { USER_DAL } from '../i_data_access_layer/i.user.dal';




@Module({
  
    providers: [
        {
          useClass: AuthRepository,
          provide: AUTH_REPOSITORY
        },
        {
          useClass: UserDataAccessLayer,
          provide: USER_DAL
        },
        
      ],
    controllers: [AuthController]
})
export class AuthModule{}