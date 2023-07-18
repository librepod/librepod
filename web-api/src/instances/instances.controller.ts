import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateInstanceDto } from './dto/update-instance.dto';
import { Instance } from './entities/instance.entity';
import { CreateInstanceDto } from './dto/create-instance.dto';

@ApiTags('instances')
@Controller('instances')
export class InstancesController {
  @Get()
  @ApiResponse({
    status: 200,
    type: Instance,
    isArray: true,
  })
  getList(): Array<Instance> {
    return null;
  }

  @Post()
  @ApiResponse({
    status: 200,
    type: CreateInstanceDto,
  })
  create(@Body() createInstanceDto: CreateInstanceDto): Instance {
    return null;
  }

  @Put()
  @ApiResponse({
    status: 200,
    type: Instance,
  })
  update(@Body() updateInstanceDto: UpdateInstanceDto): Instance {
    return null;
  }
}
