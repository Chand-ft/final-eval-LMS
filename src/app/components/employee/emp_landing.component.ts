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
  selector: 'bh-emp_landing',
  templateUrl: './emp_landing.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class emp_landingComponent {
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
      this.sd_ENkg2ryIGdv4m5TT(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ENkg2ryIGdv4m5TT(bh) {
    try {
      bh = this.sd_yPvcUA2aCiDQhVW5(bh);
      //appendnew_next_sd_ENkg2ryIGdv4m5TT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ENkg2ryIGdv4m5TT');
    }
  }

  //appendnew_flow_emp_landingComponent_start

  sd_yPvcUA2aCiDQhVW5(bh) {
    try {
      this.page.objFromClient = undefined;
      bh = this.sd_3X9h0x0J10WFsiXt(bh);
      //appendnew_next_sd_yPvcUA2aCiDQhVW5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yPvcUA2aCiDQhVW5');
    }
  }

  async sd_3X9h0x0J10WFsiXt(bh) {
    try {
      const testClientInstance: testClient =
        this.__page_injector__.get(testClient);

      let outputVariables = await testClientInstance.sd_rAxC2XUmdYGxqowX();
      this.page.objFromClient = outputVariables.local.clientResult;

      bh = this.sd_J0oh5ypAawzQuAlh(bh);
      //appendnew_next_sd_3X9h0x0J10WFsiXt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3X9h0x0J10WFsiXt');
    }
  }

  sd_J0oh5ypAawzQuAlh(bh) {
    try {
      const page = this.page;
      console.log(page.objFromClient);
      //appendnew_next_sd_J0oh5ypAawzQuAlh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_J0oh5ypAawzQuAlh');
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
  //appendnew_flow_emp_landingComponent_Catch
}
