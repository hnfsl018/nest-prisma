import { IsString, IsNotEmpty } from 'class-validator';
 
export class CreateOrUpdateUserDto {
  @IsString()
  @IsNotEmpty()
  email: string;
 
  @IsString()
  @IsNotEmpty()
  name: string;
}