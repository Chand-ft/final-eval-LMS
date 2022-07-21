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

  logout(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_OaG2Aj0seVzaXkRK(bh);
      //appendnew_next_logout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R451aqKt28TtdCCS');
    }
  }

  //appendnew_flow_emp_landingComponent_start

  sd_yPvcUA2aCiDQhVW5(bh) {
    try {
      this.page.currentUser = {};
      bh = this.sd_yxq0WcgSzSoaNAg7(bh);
      //appendnew_next_sd_yPvcUA2aCiDQhVW5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yPvcUA2aCiDQhVW5');
    }
  }

  sd_yxq0WcgSzSoaNAg7(bh) {
    try {
      this.page.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
      this.sd_hkg2oUMT9nESAd4i(bh);
      //appendnew_next_sd_yxq0WcgSzSoaNAg7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yxq0WcgSzSoaNAg7');
    }
  }

  sd_hkg2oUMT9nESAd4i(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.currentUser);
      //appendnew_next_sd_hkg2oUMT9nESAd4i
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hkg2oUMT9nESAd4i');
    }
  }

  async sd_OaG2Aj0seVzaXkRK(bh) {
    try {
      const testClientInstance: testClient =
        this.__page_injector__.get(testClient);

      let outputVariables = await testClientInstance.logout();

      //appendnew_next_sd_OaG2Aj0seVzaXkRK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OaG2Aj0seVzaXkRK');
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
