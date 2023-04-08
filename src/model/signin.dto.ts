import {  IsNotEmpty,IsString, MaxLength, MinLength } from 'class-validator';


export class signInDto {
 @IsNotEmpty({message:'username is incorrect'})
  @IsString()
  @MinLength(3)
  username: string;
  @IsNotEmpty({message:'username is incorrect'})
  @IsString()
  @MinLength(8)
  @MaxLength(50)
  password: string;
}



