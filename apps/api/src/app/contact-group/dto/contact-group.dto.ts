import {
  ArrayMinSize,
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateContactGroupDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(2)
  contacts: string[];
}

export class UpdateContactGroupDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}

export class ContactsToGroupDto {
  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(1)
  contactIds: string[];
}
