import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StoresService } from '../services/stores.service';
import { StoreDetailsDto, CreateStoreDto, UpdateStoreDto } from '../dto';
import { CreateEntityDto, DeleteEntityDto, UpdateEntityDto } from 'src/common/dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('stores')
@Controller('stores')
export class StoresController {
  constructor(private storesService: StoresService) {}

  @Get()
  @ApiOperation({ summary: 'Get all stores' })
  @ApiOkResponse({ type: StoreDetailsDto, isArray: true })
  async getList(): Promise<StoreDetailsDto[]> {
    const stores = await this.storesService.getAll();
    return stores.map((store) => {
      return {
        id: store.id,
        name: store.name,
        specificationFilePath: store.specificationFilePath,
      };
    });
  }

  @Post()
  @ApiOperation({ summary: 'Create new store' })
  @ApiOkResponse({ type: CreateEntityDto })
  async create(@Body() createStoreDto: CreateStoreDto): Promise<CreateEntityDto> {
    const store = await this.storesService.create(createStoreDto);
    return {
      id: store.id,
      message: 'Store created successfully',
    };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update store' })
  @ApiOkResponse({ type: UpdateEntityDto })
  async update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto): Promise<UpdateEntityDto> {
    await this.storesService.update(id, updateStoreDto);
    return {
      message: 'Store updated successfully',
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete store' })
  @ApiOkResponse({ type: DeleteEntityDto })
  async delete(@Param('id') id: string): Promise<DeleteEntityDto> {
    await this.storesService.delete(id);
    return {
      message: 'Store deleted successfully',
    };
  }
}
