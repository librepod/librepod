// import { Injectable } from '@nestjs/common';
// import { StoreSourceDetailsDto } from '../dto/store-source-details.dto';
// import { StoresService } from './stores.service';
// import { CreateStoreSourceDto } from '../dto/create-store-source.dto';
// import { nanoid } from 'nanoid';

// @Injectable()
// export class StoreSourcesService {
//   constructor(private StoreService: StoresService) {}
//   async createStoreSource(sourcePayload: CreateStoreSourceDto): Promise<void> {
//     const config = await this.StoreService.getConfig();
//     const source = {
//       id: nanoid(),
//       name: sourcePayload.name,
//       specificationFilePath: sourcePayload.specificationFilePath,
//     };
//     const newConfig = {
//       ...config,
//       sources: [...config.sources, source],
//     };
//     await this.StoreService.updateConfig(newConfig);
//   }
//   async getStoreSources(): Promise<StoreSourceDetailsDto[]> {
//     const config = await this.StoreService.getConfig();
//     return config.sources;
//   }

//   async updateStoreSource(sourceId: string, sourcePayload: CreateStoreSourceDto): Promise<void> {
//     const config = await this.StoreService.getConfig();
//     const newConfig = {
//       ...config,
//       sources: config.sources.map((source) => {
//         if (source.id === sourceId) {
//           return {
//             ...source,
//             name: sourcePayload.name,
//             specificationFilePath: sourcePayload.specificationFilePath,
//           };
//         }
//         return source;
//       }),
//     };
//     await this.StoreService.updateConfig(newConfig);
//   }

//   async deleteStoreSource(sourceId: string): Promise<void> {
//     const config = await this.StoreService.getConfig();
//     const newConfig = {
//       ...config,
//       sources: config.sources.filter((source) => source.id !== sourceId),
//     };
//     await this.StoreService.updateConfig(newConfig);
//   }
// }
