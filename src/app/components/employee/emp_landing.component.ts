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
      this.page.leaveDays = undefined;
      this.page.objKeys = undefined;
      this.page.objValues = undefined;
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
      bh = this.sd_QNOfYTt6nzCVkKfh(bh);
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

  sd_QNOfYTt6nzCVkKfh(bh) {
    try {
      const page = this.page;
      bh.input.path = 'getLeaveDays/' + page.currentUser.email;
      bh.input.method = 'Get';
      bh.input.body = {
        email: page.currentUser.email,
      };

      bh = this.sd_rvTel57wdVhnguKy(bh);
      //appendnew_next_sd_QNOfYTt6nzCVkKfh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QNOfYTt6nzCVkKfh');
    }
  }

  async sd_rvTel57wdVhnguKy(bh) {
    try {
      const testClientInstance: testClient =
        this.__page_injector__.get(testClient);

      let outputVariables = await testClientInstance.dynamicApiCall(
        bh.input.path,
        bh.input.body,
        bh.input.method
      );
      this.page.leaveDays = outputVariables.local.results;

      this.sd_2IJPJEmoHMhT9tfN(bh);
      bh = this.sd_OqMlPI9VOjJSA12W(bh);
      //appendnew_next_sd_rvTel57wdVhnguKy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rvTel57wdVhnguKy');
    }
  }

  sd_2IJPJEmoHMhT9tfN(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.leaveDays);
      //appendnew_next_sd_2IJPJEmoHMhT9tfN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2IJPJEmoHMhT9tfN');
    }
  }

  sd_OqMlPI9VOjJSA12W(bh) {
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
      //appendnew_next_sd_OqMlPI9VOjJSA12W
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OqMlPI9VOjJSA12W');
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
