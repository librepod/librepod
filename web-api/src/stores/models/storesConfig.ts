import { JsonObject, JsonProperty } from 'typescript-json-serializer';
import { Store } from '../entities/store.entity';

@JsonObject()
export class StoresConfig {
  @JsonProperty()
  items: Array<Store>;
}
