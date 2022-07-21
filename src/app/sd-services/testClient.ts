/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class testClient {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_testClient

  async sd_rAxC2XUmdYGxqowX(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          clientResult: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_vDgdejx9122Twjky(bh);
      //appendnew_next_sd_rAxC2XUmdYGxqowX
      return (
        // formatting output variables
        {
          input: {},
          local: {
            clientResult: bh.local.clientResult,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rAxC2XUmdYGxqowX');
    }
  }

  //appendnew_flow_testClient_start

  async sd_vDgdejx9122Twjky(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/getUsers',
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.clientResult = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_vDgdejx9122Twjky
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vDgdejx9122Twjky');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_testClient_Catch
}
