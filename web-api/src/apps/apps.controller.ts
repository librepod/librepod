import { AppsService } from './apps.service';

export class AppsController {
  constructor(private appsService: AppsService) {}

  getOne(): object {
    return null;
  }

  getList(): Promise<Array<object>> {
    return this.appsService.getAll();
  }
}
