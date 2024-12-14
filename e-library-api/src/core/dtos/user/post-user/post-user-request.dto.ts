import { IsNotEmpty, IsString } from 'class-validator';

export class PostUserRequestDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  confirmpassword: string;
}
