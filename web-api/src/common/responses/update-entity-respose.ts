import { ApiProperty } from '@nestjs/swagger';

export class UpdateEntityResponse {
  @ApiProperty()
  message: string;
}
