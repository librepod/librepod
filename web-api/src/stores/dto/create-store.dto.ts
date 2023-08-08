import { ApiProperty } from '@nestjs/swagger';

export class CreateStoreDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  specificationFilePath: string;
}
