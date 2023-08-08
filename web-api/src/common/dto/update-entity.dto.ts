import { ApiProperty } from '@nestjs/swagger';

export class UpdateEntityDto {
  @ApiProperty()
  message: string;
}
