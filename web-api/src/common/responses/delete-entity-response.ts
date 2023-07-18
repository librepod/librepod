import { ApiProperty } from '@nestjs/swagger';

export class DeleteEntityReponse {
  @ApiProperty()
  message: string;
}
