import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { KubeService } from './kube.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('kube')
export class KubeController {
  constructor(
    private readonly appService: AppService,
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
