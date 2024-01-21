import { Controller, Get, Put, Body, Post, Delete, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { StoreSourcesService } from './store-sources.service';
import { StoreSourceInfoDto } from './dtos/store-source-info.dto';
import { StoreSourceUpdateDto } from './dtos/store-source-update.dto';
import { StoreSourceCreateDto } from './dtos/store-source-create.dto';

@ApiTags('store-sources')
@Controller('store-sources')
export class StoreSourcesController {
  constructor(private readonly storeSourcesService: StoreSourcesService) {}

  @ApiOperation({ summary: 'Create store source' })
  @Post()
  async create(@Body() storeSourceCreateDto: StoreSourceCreateDto): Promise<string> {
    return await this.storeSourcesService.create(storeSourceCreateDto);
  }

  @ApiOperation({ summary: 'Get store sources' })
  @ApiOkResponse({
    description: 'List of store sources',
    type: StoreSourceInfoDto,
    isArray: true,
  })
  @Get()
  async getList(): Promise<StoreSourceInfoDto[]> {
    return await this.storeSourcesService.getList();
  }

  @ApiOperation({ summary: 'Update store source' })
  @Put(':storeSourceId')
  async update(@Param('storeSourceId') storeSourceId: string, @Body() storeSourceUpdateDto: StoreSourceUpdateDto): Promise<void> {
    return await this.storeSourcesService.update(storeSourceId, storeSourceUpdateDto);
  }

  @ApiOperation({ summary: 'Delete store source' })
  @Delete(':storeSourceId')
  async delete(@Param('storeSourceId') storeSourceId: string): Promise<void> {
    return await this.storeSourcesService.delete(storeSourceId);
  }
}
