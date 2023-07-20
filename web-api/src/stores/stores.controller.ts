import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Store } from './entities/store.entity';
import { StoresService } from './stores.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { CreateEntityDto, DeleteEntityDto, UpdateEntityDto } from 'src/common/dto';

@Controller('stores')
export class StoresController {
  constructor(private storesService: StoresService) {}

  @Get()
  getList(): Promise<Array<Store>> {
    return this.storesService.find();
  }

  @Post()
  async create(@Body() createStoreDto: CreateStoreDto): Promise<CreateEntityDto> {
    const store = await this.storesService.create(createStoreDto);
    return {
      id: store.id,
      message: 'Store created successfully',
    };
  }

  @Put()
  async update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto): Promise<UpdateEntityDto> {
    await this.storesService.update(id, updateStoreDto);
    return {
      message: 'Store updated successfully',
    };
  }

  @Delete()
  async delete(@Param('id') id: string): Promise<DeleteEntityDto> {
    await this.storesService.delete(id);
    return {
      message: 'Store deleted successfully',
    };
  }
}
