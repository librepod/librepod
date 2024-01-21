import { ApiProperty } from '@nestjs/swagger';

export class StoreSourceUpdateDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  specificationFilePath: string;
}
