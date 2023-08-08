import { JsonObject, JsonProperty } from 'typescript-json-serializer';
import { Store } from '../models/store.model';

@JsonObject()
export class StoresOptions {
  @JsonProperty()
  items: Array<Store>;
}
