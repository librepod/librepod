import { ApiProperty } from '@nestjs/swagger';

export class CreateEntityDto {
  @ApiProperty()
  public id: string;
  @ApiProperty()
  public message: string;
}
