import { ApiProperty } from '@nestjs/swagger';

export class StoreSourceCreateDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  specificationPath: string;
}
