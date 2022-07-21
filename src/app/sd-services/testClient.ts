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

  async dynamicApiCall(
    path = '',
    body: any = undefined,
    method = '',
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          path: path,
          body: body,
          method: method,
        },
        local: {
          results: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_diuouFSm7NZxrdM8(bh);
      //appendnew_next_dynamicApiCall
      return (
        // formatting output variables
        {
          input: {},
          local: {
            results: bh.local.results,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rAxC2XUmdYGxqowX');
    }
  }

  async logout(...others) {
    try {
      var bh: any = {
        input: {},
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_maiDdo8G4hqz5bz2(bh);
      //appendnew_next_logout
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PqPmMKp9iu1v6DXL');
    }
  }

  //appendnew_flow_testClient_start

  async sd_diuouFSm7NZxrdM8(bh) {
    try {
      bh.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = await this.createUrl(bh);
      //appendnew_next_sd_diuouFSm7NZxrdM8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_diuouFSm7NZxrdM8');
    }
  }

  async createUrl(bh) {
    try {
      bh.input.url = bh.ssdUrl + bh.input.path;
      bh = await this.sd_vDgdejx9122Twjky(bh);
      //appendnew_next_createUrl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8t83vBQ7BXpRk4f3');
    }
  }

  async sd_vDgdejx9122Twjky(bh) {
    try {
      let requestOptions = {
        url: bh.input.url,
        method: bh.input.method,
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.local.results = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_vDgdejx9122Twjky
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vDgdejx9122Twjky');
    }
  }

  async sd_maiDdo8G4hqz5bz2(bh) {
    try {
      sessionStorage.clear();
      bh = await this.sd_aZybkWAJ3zW2gY50(bh);
      //appendnew_next_sd_maiDdo8G4hqz5bz2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_maiDdo8G4hqz5bz2');
    }
  }

  async sd_aZybkWAJ3zW2gY50(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.router.navigate([
        this.sdService.formatPathWithParams(path, undefined),
      ]);
      //appendnew_next_sd_aZybkWAJ3zW2gY50
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aZybkWAJ3zW2gY50');
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
