import { ConflictException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { RegisterModel } from "../model/register.model";
import { SignupDto } from "src/model/signup.dto";



  
  @Injectable()
  export class RegisterService {
    private users: RegisterModel[] = [];
  
    constructor(private readonly jwtService: JwtService) {}
  
    async signup(newUser: SignupDto): Promise<{ accessToken: string; }> {
      if (this.users.find(u => u.username === newUser.username)) {
        
      }
      const user = {
        username: newUser.username,
        password: newUser.password,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        dateOfBirth:newUser.dateOfBirth,
        address:newUser.address,
        email:newUser.email,
        phoneNumber:newUser.phoneNumber,
      };
      this.users.push(user);
      return { accessToken: this.jwtService.sign({ sub: user.username }) };
    }
  }