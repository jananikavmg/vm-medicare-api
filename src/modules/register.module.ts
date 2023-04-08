import { Module } from '@nestjs/common';
import { RegisterService } from '../service/register.service';
import { RegisterController } from '../controllers/register.controller';

@Module({
  providers: [RegisterService],
  exports: [RegisterService],
  controllers: [RegisterController],
})
export class RegisterModule {}
