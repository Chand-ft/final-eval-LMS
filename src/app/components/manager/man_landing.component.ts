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
//append_imports_end

@Component({
  selector: 'bh-man_landing',
  templateUrl: './man_landing.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class man_landingComponent {
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
      this.sd_hMHnpEFj5wkGKu93(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_hMHnpEFj5wkGKu93(bh) {
    try {
      bh = this.sd_1brxrcjlnqUbSe4U(bh);
      //appendnew_next_sd_hMHnpEFj5wkGKu93
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hMHnpEFj5wkGKu93');
    }
  }

  selectRoute(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Ut7WUaA5DVyBkjl5(bh);
      //appendnew_next_selectRoute
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Qn79kk8ukYVllHAZ');
    }
  }

  chooseReview(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_M5Thm4nciM8lMzdX(bh);
      //appendnew_next_chooseReview
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bcg7Zx51Yolraj4W');
    }
  }

  //appendnew_flow_man_landingComponent_start

  sd_1brxrcjlnqUbSe4U(bh) {
    try {
      this.page.routeSelected = false;
      this.page.showManagerOptions = true;
      this.page.currentUser = undefined;
      bh = this.sd_lG72TArY5oBhoig0(bh);
      //appendnew_next_sd_1brxrcjlnqUbSe4U
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1brxrcjlnqUbSe4U');
    }
  }

  sd_lG72TArY5oBhoig0(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      bh = this.sd_5S1im7arFsl6GJM5(bh);
      //appendnew_next_sd_lG72TArY5oBhoig0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lG72TArY5oBhoig0');
    }
  }

  sd_5S1im7arFsl6GJM5(bh) {
    try {
      const page = this.page;
      if (page.router.url == '/home/man') {
        page.routeSelected = false;
        page.showManagerOptions = true;
      }

      bh = this.storeUserLocally(bh);
      //appendnew_next_sd_5S1im7arFsl6GJM5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5S1im7arFsl6GJM5');
    }
  }

  storeUserLocally(bh) {
    try {
      this.page.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
      this.sd_DOu631CMcoRHGRrS(bh);
      //appendnew_next_storeUserLocally
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cro96aqUEYPUz64b');
    }
  }

  sd_DOu631CMcoRHGRrS(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.currentUser);
      //appendnew_next_sd_DOu631CMcoRHGRrS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DOu631CMcoRHGRrS');
    }
  }

  sd_Ut7WUaA5DVyBkjl5(bh) {
    try {
      const page = this.page;
      page.routeSelected = true;
      page.showManagerOptions = false;
      //appendnew_next_sd_Ut7WUaA5DVyBkjl5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ut7WUaA5DVyBkjl5');
    }
  }

  sd_M5Thm4nciM8lMzdX(bh) {
    try {
      const page = this.page;
      page.routeSelected = true;
      page.showManagerOptions = false;
      //appendnew_next_sd_M5Thm4nciM8lMzdX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_M5Thm4nciM8lMzdX');
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
  //appendnew_flow_man_landingComponent_Catch
}
