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
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-register',
  templateUrl: './register.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class registerComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_7hvKeccTXle8jCFV(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_7hvKeccTXle8jCFV(bh) {
    try {
      bh = this.sd_TeoHfhuNOwDyQR4q(bh);
      //appendnew_next_sd_7hvKeccTXle8jCFV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7hvKeccTXle8jCFV');
    }
  }

  register(form: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form: form };
      bh.local = {};
      bh = this.checkIfFormIsValid(bh);
      //appendnew_next_register
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sGYWK6aJPZmP7VjQ');
    }
  }

  //appendnew_flow_registerComponent_start

  sd_TeoHfhuNOwDyQR4q(bh) {
    try {
      this.page.roles = [];
      this.page.addUserPath = 'addUser';
      this.page.postMethod = 'POST';
      bh = this.sd_qjYpbMgslBvkwUwy(bh);
      //appendnew_next_sd_TeoHfhuNOwDyQR4q
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TeoHfhuNOwDyQR4q');
    }
  }

  sd_qjYpbMgslBvkwUwy(bh) {
    try {
      const page = this.page;
      page.roles = [
        'Junior Dev',
        'Senior Dev',
        'Operations',
        'Operations Manager',
        'Manager',
      ];
      //appendnew_next_sd_qjYpbMgslBvkwUwy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qjYpbMgslBvkwUwy');
    }
  }

  async checkIfFormIsValid(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_jvaVxMAmE5jZyDXO(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_7iGD0fNvHpUGq9gR(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_phUPJik7wDCaof3b');
    }
  }

  async sd_jvaVxMAmE5jZyDXO(bh) {
    try {
      const testClientInstance: testClient =
        this.__page_injector__.get(testClient);

      let outputVariables = await testClientInstance.dynamicApiCall(
        this.page.addUserPath,
        this.page.dm.register,
        this.page.postMethod
      );
      bh.response = outputVariables.local.results;

      bh = this.sd_HtqKrLIB99tXNSoq(bh);
      //appendnew_next_sd_jvaVxMAmE5jZyDXO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jvaVxMAmE5jZyDXO');
    }
  }

  sd_HtqKrLIB99tXNSoq(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Successfully registered', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_S0mh2FR6gnJS4XBV(bh);
      //appendnew_next_sd_HtqKrLIB99tXNSoq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HtqKrLIB99tXNSoq');
    }
  }

  async sd_S0mh2FR6gnJS4XBV(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_S0mh2FR6gnJS4XBV
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_S0mh2FR6gnJS4XBV');
    }
  }

  sd_7iGD0fNvHpUGq9gR(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Form Invalid', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_7iGD0fNvHpUGq9gR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7iGD0fNvHpUGq9gR');
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
  //appendnew_flow_registerComponent_Catch
}
