import { ApiProperty } from '@nestjs/swagger';

export class StoreDetailsDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  specificationFilePath: string;
}
