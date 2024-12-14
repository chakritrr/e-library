import { ApiProperty } from '@nestjs/swagger';

export class PostUserResponseDto {
  @ApiProperty()
  id: string;
}
