import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateEntityResponse } from 'src/common/responses/create-entity.response';
import { InstancesListResponse } from './responses/instances-list.response';

@ApiTags('instances')
@Controller('instances')
export class InstancesController {
  @Get()
  getList(): InstancesListResponse {
    return new InstancesListResponse();
  }

  @Post()
  create(): CreateEntityResponse {
    return new CreateEntityResponse();
  }
}
