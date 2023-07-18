import { ApiProperty } from '@nestjs/swagger';

export class CreateEntityResponse {
  @ApiProperty()
  public id: string;
  @ApiProperty()
  public message: string;
}
