//append_imports_start

import * as sd_orbaOAt6FX7fh3Ar from 'app/sd-services/testClient'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(private sd_orbaOAt6FX7fh3Ar: sd_orbaOAt6FX7fh3Ar.testClient) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
