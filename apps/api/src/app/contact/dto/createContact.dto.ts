import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  phoneNumber: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  address: string;
}
