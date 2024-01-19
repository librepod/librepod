import { JsonObject, JsonProperty } from 'typescript-json-serializer';
import { Store } from '../models/store-source.model';

@JsonObject()
export class StoresOptions {
  @JsonProperty()
  version: string;
  @JsonProperty()
  items: Array<Store>;
}
