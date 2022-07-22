/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { testClient } from 'app/sd-services/testClient'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-submit_new_request',
  templateUrl: './submit_new_request.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class submit_new_requestComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_xr24IFkl6nJEMlPG(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_xr24IFkl6nJEMlPG(bh) {
    try {
      bh = this.sd_9EIzZerUb513dQyi(bh);
      //appendnew_next_sd_xr24IFkl6nJEMlPG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xr24IFkl6nJEMlPG');
    }
  }

  //appendnew_flow_submit_new_requestComponent_start

  sd_9EIzZerUb513dQyi(bh) {
    try {
      bh = this.sd_sSBOb04hdtqWcNqu(bh);
      //appendnew_next_sd_9EIzZerUb513dQyi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9EIzZerUb513dQyi');
    }
  }

  sd_sSBOb04hdtqWcNqu(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      bh = this.sd_xpiesBx249Y13bnN(bh);
      //appendnew_next_sd_sSBOb04hdtqWcNqu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sSBOb04hdtqWcNqu');
    }
  }

  sd_xpiesBx249Y13bnN(bh) {
    try {
      const page = this.page;
      if (page.router.url == '/home/man') {
        page.routeSelected = false;
        page.showManagerOptions = true;
      }

      bh = this.storeUserLocally(bh);
      //appendnew_next_sd_xpiesBx249Y13bnN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xpiesBx249Y13bnN');
    }
  }

  storeUserLocally(bh) {
    try {
      this.page.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
      this.sd_WQMlSRLCnh2mXlos(bh);
      bh = this.sd_LF6YEQD5xljpp4Ev(bh);
      //appendnew_next_storeUserLocally
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OAycdZpbpKlu16Ya');
    }
  }

  sd_WQMlSRLCnh2mXlos(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.currentUser);
      //appendnew_next_sd_WQMlSRLCnh2mXlos
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WQMlSRLCnh2mXlos');
    }
  }

  sd_LF6YEQD5xljpp4Ev(bh) {
    try {
      const page = this.page;
      bh.input.path = 'getLeaveDays/' + page.currentUser.email;
      bh.input.method = 'Get';
      bh.input.body = {
        owner: page.currentUser.email,
      };

      bh = this.sd_yvsSmHmHkMKnACAz(bh);
      //appendnew_next_sd_LF6YEQD5xljpp4Ev
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LF6YEQD5xljpp4Ev');
    }
  }

  async sd_yvsSmHmHkMKnACAz(bh) {
    try {
      const testClientInstance: testClient =
        this.__page_injector__.get(testClient);

      let outputVariables = await testClientInstance.dynamicApiCall(
        bh.input.path,
        bh.input.body,
        bh.input.method
      );
      this.page.leaveDays = outputVariables.local.results;

      this.sd_gfjk2Y9ZpfWqNC68(bh);
      bh = this.sd_bNaODwW8TeDhzwB9(bh);
      //appendnew_next_sd_yvsSmHmHkMKnACAz
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yvsSmHmHkMKnACAz');
    }
  }

  sd_gfjk2Y9ZpfWqNC68(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.leaveDays);
      //appendnew_next_sd_gfjk2Y9ZpfWqNC68
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gfjk2Y9ZpfWqNC68');
    }
  }

  sd_bNaODwW8TeDhzwB9(bh) {
    try {
      const page = this.page; // console.log(Object.keys("LD" ,page.leaveDays));
      // console.log("LD" ,page.leaveDays);
      delete page.leaveDays[0]['_id'];
      delete page.leaveDays[0]['owner'];

      console.log('keys', Object.keys(page.leaveDays[0]));
      console.log('values', Object.values(page.leaveDays[0]));
      page.objValues = Object.values(page.leaveDays[0]);
      page.objKeys = Object.keys(page.leaveDays[0]);

      page.objKeys = [
        'Sick leave',
        'Annual leave',
        'Compassionate leave',
        'Special leave',
      ];
      page.objValues = [
        {
          label: 'Leave Days',
          data: page.objValues,
        },
      ];
      //appendnew_next_sd_bNaODwW8TeDhzwB9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bNaODwW8TeDhzwB9');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
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
  //appendnew_flow_submit_new_requestComponent_Catch
}
