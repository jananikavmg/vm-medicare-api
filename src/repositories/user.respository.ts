import { Injectable } from '@nestjs/common';
import { smallRandomDelay } from '../helper/helper';
import { RegisterModel } from '../model/register.model';

@Injectable()
export class UserRepository {
  private users: RegisterModel[] = [
    {
     
        username:"john",
        password: "johnkennedy",
        firstName: "john",
        lastName: "kennedy",
        dateOfBirth:679797,
        address:"main road",
        email:"john@gmail.com",
        phoneNumber:9876543210,
    },
   
  ];

  public async findByEmail(email: string): Promise<RegisterModel | undefined> {
    await smallRandomDelay();

    return this.users.find((it) => it.email === email);
  }
}