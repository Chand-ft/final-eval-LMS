import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class register {
  @JsonProperty('email', String, true)
  public email: string = undefined;

  @JsonProperty('empId', String, true)
  public empId: string = undefined;

  @JsonProperty('password', String, true)
  public password: string = undefined;

  @JsonProperty('role', String, true)
  public role: string = undefined;

}