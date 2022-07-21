import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class login {
  @JsonProperty('email', String, true)
  public email: string = undefined;

  @JsonProperty('password', String, true)
  public password: string = undefined;

}