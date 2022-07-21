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
  selector: 'bh-emp_pending',
  templateUrl: './emp_pending.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class emp_pendingComponent {
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
      this.sd_1lPEXcJ800NIEscu(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_1lPEXcJ800NIEscu(bh) {
    try {
      bh = this.sd_cV9OALw8QAEclB95(bh);
      //appendnew_next_sd_1lPEXcJ800NIEscu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1lPEXcJ800NIEscu');
    }
  }

  //appendnew_flow_emp_pendingComponent_start

  sd_cV9OALw8QAEclB95(bh) {
    try {
      this.page.resultFormDB = undefined;
      bh = this.sd_0Krus0STxl4CiL4g(bh);
      //appendnew_next_sd_cV9OALw8QAEclB95
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cV9OALw8QAEclB95');
    }
  }

  sd_0Krus0STxl4CiL4g(bh) {
    try {
      const page = this.page;
      bh.input.path = 'getLeaveRequests';
      bh.input.method = 'Get';
      bh.input.body = {};

      bh = this.sd_cCePLY0678ttS3WD(bh);
      //appendnew_next_sd_0Krus0STxl4CiL4g
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0Krus0STxl4CiL4g');
    }
  }

  async sd_cCePLY0678ttS3WD(bh) {
    try {
      const testClientInstance: testClient =
        this.__page_injector__.get(testClient);

      let outputVariables = await testClientInstance.dynamicApiCall(
        bh.input.path,
        bh.input.body,
        bh.input.method
      );
      this.page.resultFormDB = outputVariables.local.results;

      this.sd_b5Yiy3oPXQoz6CRU(bh);
      //appendnew_next_sd_cCePLY0678ttS3WD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cCePLY0678ttS3WD');
    }
  }

  sd_b5Yiy3oPXQoz6CRU(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.resultFormDB);
      //appendnew_next_sd_b5Yiy3oPXQoz6CRU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_b5Yiy3oPXQoz6CRU');
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
  //appendnew_flow_emp_pendingComponent_Catch
}