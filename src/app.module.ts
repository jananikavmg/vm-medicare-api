import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth.module';
import { UsersModule } from './modules/users.module';
import { LoginModule } from './modules/login.module';
import { RegisterModule } from './modules/register.module';

@Module({
  imports: [AuthModule, UsersModule,LoginModule,RegisterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
