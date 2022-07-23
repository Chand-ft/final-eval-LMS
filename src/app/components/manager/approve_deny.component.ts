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

  respondToLeave(response = '', obj: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { response: response, obj: obj };
      bh.local = { result: undefined };
      bh = this.sd_SubterjrPZ8hRHsj(bh);
      //appendnew_next_respondToLeave
      return bh.local.result;
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
      this.page.currentUser = undefined;
      bh = this.getUserLocally(bh);
      //appendnew_next_sd_VqP5yIWqlsnNbPuY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VqP5yIWqlsnNbPuY');
    }
  }

  getUserLocally(bh) {
    try {
      this.page.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
      bh = this.sd_Us3LxJsCzzi43Yn0(bh);
      //appendnew_next_getUserLocally
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_j38hbgVmn9oMcwYn');
    }
  }

  sd_Us3LxJsCzzi43Yn0(bh) {
    try {
      const page = this.page;
      bh.input.path = 'getLeaveRequests';
      bh.input.method = 'POST';
      bh.input.body = { email: page.currentUser.email };
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

      bh = this.sd_HvSJliMhhx2FJJTJ(bh);
      this.sd_ig1LpOwW2ZexYIqy(bh);
      //appendnew_next_sd_At1DwVxAvjL9kqXM
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_At1DwVxAvjL9kqXM');
    }
  }

  sd_HvSJliMhhx2FJJTJ(bh) {
    try {
      const page = this.page;
      console.log('owner', page.resultFormDB[0].owner);
      //appendnew_next_sd_HvSJliMhhx2FJJTJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HvSJliMhhx2FJJTJ');
    }
  }

  sd_ig1LpOwW2ZexYIqy(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.currentUser);
      //appendnew_next_sd_ig1LpOwW2ZexYIqy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ig1LpOwW2ZexYIqy');
    }
  }

  sd_SubterjrPZ8hRHsj(bh) {
    try {
      const page = this.page;
      bh.input.obj.status = bh.input.response;

      bh.input.path = 'updateLeaveRequest';
      bh.input.method = 'POST';
      bh.input.body = bh.input.obj;
      console.log(bh.input);

      bh = this.sd_Ac0n2VknS29F7mVr(bh);
      //appendnew_next_sd_SubterjrPZ8hRHsj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SubterjrPZ8hRHsj');
    }
  }

  async sd_Ac0n2VknS29F7mVr(bh) {
    try {
      const testClientInstance: testClient =
        this.__page_injector__.get(testClient);

      let outputVariables = await testClientInstance.dynamicApiCall(
        bh.input.path,
        bh.input.body,
        bh.input.method
      );
      this.page.resultFormDB = outputVariables.local.results;

      //appendnew_next_sd_Ac0n2VknS29F7mVr
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ac0n2VknS29F7mVr');
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
