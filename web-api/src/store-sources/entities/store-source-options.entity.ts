import { JsonObject, JsonProperty } from 'typescript-json-serializer';
import { StoreSourceEntity } from './store-source.entity';

@JsonObject()
export class StoreSourceOptionsEntity {
  @JsonProperty()
  version: string;
  @JsonProperty()
  items: Array<StoreSourceEntity>;
}
