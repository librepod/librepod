import { ApiProperty } from '@nestjs/swagger';

export class CreateEntityResponse {
  @ApiProperty()
  message: string;
}
