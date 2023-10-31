import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { KubernetesService } from '../services/kubernetes.service';
import { Controller, Delete, Get, Post } from '@nestjs/common';
import { V1ConfigMap } from '@kubernetes/client-node';

@ApiTags('kubernetes')
@Controller('kubernetes')
export class KubernetesController {
  constructor(private readonly kubernetesService: KubernetesService) {}

  @Post('config')
  @ApiOperation({ summary: 'Create kubernetes config map' })
  async createConfigMap(): Promise<void> {
    return await this.kubernetesService.createConfigMap();
  }

  @Get('config')
  @ApiOperation({ summary: 'Get kubernetes config map' })
  async getConfigMap(): Promise<V1ConfigMap> {
    return await this.kubernetesService.getConfigMap();
  }

  @Delete('config')
  async deleteConfigMap(): Promise<void> {
    return await this.kubernetesService.deleteConfigMap();
  }
}
