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
import { testClient } from 'app/sd-services/testClient'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-approve_deny',
  templateUrl: './approve_deny.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class approve_denyComponent {
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
      this.sd_0svWdgbcxL9I31sg(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_0svWdgbcxL9I31sg(bh) {
    try {
      bh = this.sd_VqP5yIWqlsnNbPuY(bh);
      //appendnew_next_sd_0svWdgbcxL9I31sg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0svWdgbcxL9I31sg');
    }
  }

  sd_usHSgtOawfXSZIos(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_SubterjrPZ8hRHsj(bh);
      //appendnew_next_sd_usHSgtOawfXSZIos
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_usHSgtOawfXSZIos');
    }
  }

  sd_I6pJKnFqAZ1c07So(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_YyK4JwYFriZzalm4(bh);
      //appendnew_next_sd_I6pJKnFqAZ1c07So
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_I6pJKnFqAZ1c07So');
    }
  }

  //appendnew_flow_approve_denyComponent_start

  sd_VqP5yIWqlsnNbPuY(bh) {
    try {
      this.page.resultFormDB = undefined;
      this.page.managerAppoved = false;
      this.page.managerDenied = false;
      bh = this.sd_Us3LxJsCzzi43Yn0(bh);
      //appendnew_next_sd_VqP5yIWqlsnNbPuY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VqP5yIWqlsnNbPuY');
    }
  }

  sd_Us3LxJsCzzi43Yn0(bh) {
    try {
      const page = this.page;
      bh.input.path = 'getLeaveRequests';
      bh.input.method = 'Get';
      bh.input.body = {};

      bh = this.sd_At1DwVxAvjL9kqXM(bh);
      //appendnew_next_sd_Us3LxJsCzzi43Yn0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Us3LxJsCzzi43Yn0');
    }
  }

  async sd_At1DwVxAvjL9kqXM(bh) {
    try {
      const testClientInstance: testClient =
        this.__page_injector__.get(testClient);

      let outputVariables = await testClientInstance.dynamicApiCall(
        bh.input.path,
        bh.input.body,
        bh.input.method
      );
      this.page.resultFormDB = outputVariables.local.results;

      this.sd_ig1LpOwW2ZexYIqy(bh);
      //appendnew_next_sd_At1DwVxAvjL9kqXM
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_At1DwVxAvjL9kqXM');
    }
  }

  sd_ig1LpOwW2ZexYIqy(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.resultFormDB);
      //appendnew_next_sd_ig1LpOwW2ZexYIqy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ig1LpOwW2ZexYIqy');
    }
  }

  sd_SubterjrPZ8hRHsj(bh) {
    try {
      //appendnew_next_sd_SubterjrPZ8hRHsj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SubterjrPZ8hRHsj');
    }
  }

  sd_YyK4JwYFriZzalm4(bh) {
    try {
      //appendnew_next_sd_YyK4JwYFriZzalm4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YyK4JwYFriZzalm4');
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
  //appendnew_flow_approve_denyComponent_Catch
}
