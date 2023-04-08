import { Body, Controller, Get, Inject, Post, HttpCode, HttpStatus  } from '@nestjs/common';
import {
  AUTH_REPOSITORY,
  IAuthRepository,
} from '../i_repositories/i.auth.repository';

@Controller('auth')
export class AuthController {
  authService: any;
  constructor(
    @Inject(AUTH_REPOSITORY)
    private readonly _authRepository: IAuthRepository,
  ) {}


  @Get()
  public async getToken(): Promise<string> {
    return await this._authRepository.getToken();
  }
 
}
