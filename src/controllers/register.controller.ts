import { Body, Controller, Get, Inject, Post, HttpCode, HttpStatus  } from '@nestjs/common';
import { SignupDto } from 'src/model/signup.dto';
import { RegisterService } from 'src/service/register.service';


@Controller('Register')
export class RegisterController {
  constructor(private readonly authService: RegisterService) {}

  @Post('signup')
  signup(@Body() newUser: SignupDto) {
    return this.authService.signup(newUser);
  }
}
