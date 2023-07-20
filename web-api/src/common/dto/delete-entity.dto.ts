import { ApiProperty } from '@nestjs/swagger';

export class DeleteEntityDto {
  @ApiProperty()
  message: string;
}
