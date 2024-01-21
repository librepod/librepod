import { ApiProperty } from '@nestjs/swagger';

export class StoreSourceInfoDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  specificationPath: string;
}
