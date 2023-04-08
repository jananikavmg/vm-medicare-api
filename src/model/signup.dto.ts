import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { EmailNotRegistered } from "../validation/email.validation";

export class SignupDto{
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(30)
    @Matches(/^[a-z\d-]+$/)

    username: string;
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(50)


    password: string;
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(50)
    @Matches(/^[a-z\d-]+$/)
    firstName: string;
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(50)
    @Matches(/^[a-z\d-]+$/)
    lastName: string;
   @IsNotEmpty()
   @MinLength(8)
   @MaxLength(50)
   dateOfBirth: number;
   @IsNotEmpty()
   
   @IsEmail()
 
   email: string;
   @IsNotEmpty()
   @MaxLength(10)
   phoneNumber: number;
   @IsNotEmpty()
   @IsString()
   @MinLength(10)
   @MaxLength(300)
   address: string;
    confirmationPassword: string;
}