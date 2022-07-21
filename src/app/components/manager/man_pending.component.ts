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
  selector: 'bh-man_pending',
  templateUrl: './man_pending.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class man_pendingComponent {
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
      this.sd_mRuxSwcVVwgVKsoi(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_mRuxSwcVVwgVKsoi(bh) {
    try {
      bh = this.sd_0KHRQeH5x0e0otyl(bh);
      //appendnew_next_sd_mRuxSwcVVwgVKsoi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mRuxSwcVVwgVKsoi');
    }
  }

  //appendnew_flow_man_pendingComponent_start

  sd_0KHRQeH5x0e0otyl(bh) {
    try {
      this.page.resultFormDB = undefined;
      bh = this.sd_5xqJSLoLR2mW5ht1(bh);
      //appendnew_next_sd_0KHRQeH5x0e0otyl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0KHRQeH5x0e0otyl');
    }
  }

  sd_5xqJSLoLR2mW5ht1(bh) {
    try {
      const page = this.page;
      bh.input.path = 'getLeaveRequests';
      bh.input.method = 'Get';
      bh.input.body = {};

      bh = this.sd_Ul1PVgSGjDPQjzhk(bh);
      //appendnew_next_sd_5xqJSLoLR2mW5ht1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5xqJSLoLR2mW5ht1');
    }
  }

  async sd_Ul1PVgSGjDPQjzhk(bh) {
    try {
      const testClientInstance: testClient =
        this.__page_injector__.get(testClient);

      let outputVariables = await testClientInstance.dynamicApiCall(
        bh.input.path,
        bh.input.body,
        bh.input.method
      );
      this.page.resultFormDB = outputVariables.local.results;

      this.sd_4Pd0gTTbIkvibI1P(bh);
      //appendnew_next_sd_Ul1PVgSGjDPQjzhk
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ul1PVgSGjDPQjzhk');
    }
  }

  sd_4Pd0gTTbIkvibI1P(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.resultFormDB);
      //appendnew_next_sd_4Pd0gTTbIkvibI1P
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4Pd0gTTbIkvibI1P');
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
  //appendnew_flow_man_pendingComponent_Catch
}
