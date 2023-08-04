import { Injectable } from '@nestjs/common';

@Injectable()
export class KubernetesService {
  async get() {
    return 'Kubernetes';
  }
}
