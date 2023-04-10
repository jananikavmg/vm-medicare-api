import { IsDate, IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { Type } from "class-transformer";

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
   @Type(() => Date)
   @IsDate()
   dateOfBirth: number;
   @IsNotEmpty()
   @IsEmail()
   email: string;
   @IsNotEmpty()
   @MinLength(10)
   
   phoneNumber: number;
   @IsNotEmpty()
   @IsString()
   @MinLength(10)
   @MaxLength(300)
   address: string;
    confirmationPassword: string;
}