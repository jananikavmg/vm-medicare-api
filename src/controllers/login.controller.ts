
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
  UsePipes
} from '@nestjs/common';

import { LoginService } from '../service/login.service';
import {signInDto} from '../model/signin.dto'


@Controller('medicare')
export class LoginController {
  constructor(private authService: LoginService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: signInDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

}