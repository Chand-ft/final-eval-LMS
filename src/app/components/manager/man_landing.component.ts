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
      bh = this.sd_0uOyfDDmymSPvTTK(bh);
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

  sd_0uOyfDDmymSPvTTK(bh) {
    try {
      const page = this.page;
      bh.input.path = 'getLeaveDays/' + page.currentUser.email;
      bh.input.method = 'Get';
      bh.input.body = {
        owner: page.currentUser.email,
      };

      bh = this.sd_jMuOLG6veZMWzIcW(bh);
      //appendnew_next_sd_0uOyfDDmymSPvTTK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0uOyfDDmymSPvTTK');
    }
  }

  async sd_jMuOLG6veZMWzIcW(bh) {
    try {
      const testClientInstance: testClient =
        this.__page_injector__.get(testClient);

      let outputVariables = await testClientInstance.dynamicApiCall(
        bh.input.path,
        bh.input.body,
        bh.input.method
      );
      this.page.leaveDays = outputVariables.local.results;

      bh = this.sd_oPGJDI3JpK6g36kC(bh);
      //appendnew_next_sd_jMuOLG6veZMWzIcW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jMuOLG6veZMWzIcW');
    }
  }

  sd_oPGJDI3JpK6g36kC(bh) {
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
      //appendnew_next_sd_oPGJDI3JpK6g36kC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oPGJDI3JpK6g36kC');
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
