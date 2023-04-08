
import { Module } from '@nestjs/common';
import { LoginService } from '../service/login.service';
import { UsersModule } from './users.module';
import { JwtModule } from '@nestjs/jwt';
import { LoginController } from '../controllers/login.controller';
import { jwtConstants } from '../constant/login.constant';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [LoginService],
  controllers: [LoginController],
  exports: [LoginService],
})
export class LoginModule {}