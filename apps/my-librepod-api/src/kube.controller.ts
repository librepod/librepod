import { Controller, Get, Post } from '@nestjs/common';
import { KubeService } from './kube.service';

@Controller('kube')
export class KubeController {
  constructor(
    private readonly kubeService: KubeService,
  ) {}

  @Get('pods')
  getAllPods(): any {
    return this.kubeService.getAllPods()
  }

  @Get('apps')
  getAllCrds(): any {
    return this.kubeService.listHelmCharts()
  }

  @Post('apps')
  createHelmChart(): any {
    return this.kubeService.createHelmChartObject()
  }
}
