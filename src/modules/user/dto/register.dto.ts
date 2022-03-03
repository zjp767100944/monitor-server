import { IsNotEmpty, IsString } from 'class-validator';

export class RegiterDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  salt: string;
}
