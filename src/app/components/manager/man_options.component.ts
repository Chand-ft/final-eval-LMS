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
//append_imports_end

@Component({
  selector: 'bh-man_options',
  templateUrl: './man_options.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class man_optionsComponent {
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
      this.sd_ZDoBWnJKz7jmmrpJ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ZDoBWnJKz7jmmrpJ(bh) {
    try {
      bh = this.sd_pbEyaOstyrxzIecr(bh);
      //appendnew_next_sd_ZDoBWnJKz7jmmrpJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZDoBWnJKz7jmmrpJ');
    }
  }

  //appendnew_flow_man_optionsComponent_start

  sd_pbEyaOstyrxzIecr(bh) {
    try {
      this.page.currentUser = undefined;
      bh = this.storeUserLocally(bh);
      //appendnew_next_sd_pbEyaOstyrxzIecr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pbEyaOstyrxzIecr');
    }
  }

  storeUserLocally(bh) {
    try {
      this.page.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
      this.sd_ZK9wqSh1MHRsC7vW(bh);
      //appendnew_next_storeUserLocally
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uxO0xLG6tW8o7TBh');
    }
  }

  sd_ZK9wqSh1MHRsC7vW(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.currentUser);
      //appendnew_next_sd_ZK9wqSh1MHRsC7vW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZK9wqSh1MHRsC7vW');
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
  //appendnew_flow_man_optionsComponent_Catch
}
