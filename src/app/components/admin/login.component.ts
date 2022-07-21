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
import { Router } from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-login',
  templateUrl: './login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class loginComponent {
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
      this.sd_Hfabiz86jJsJysW6(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Hfabiz86jJsJysW6(bh) {
    try {
      bh = this.sd_KNdIQcRzzd6B78jq(bh);
      //appendnew_next_sd_Hfabiz86jJsJysW6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Hfabiz86jJsJysW6');
    }
  }

  login(form: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form: form };
      bh.local = {};
      bh = this.checkIfFormIsValid(bh);
      //appendnew_next_login
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Sb40ZcG2c7sQi0dW');
    }
  }

  //appendnew_flow_loginComponent_start

  sd_KNdIQcRzzd6B78jq(bh) {
    try {
      this.page.addUserPath = 'login';
      this.page.postMethod = 'POST';
      this.page.user = {};
      //appendnew_next_sd_KNdIQcRzzd6B78jq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KNdIQcRzzd6B78jq');
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
        bh = this.sd_mX7yTDCeIHSrE7xI(bh);
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
        bh = await this.sd_Wjs9i9mTF9qVIpgT(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MVYfEq1rz5FUrMCn');
    }
  }

  async sd_mX7yTDCeIHSrE7xI(bh) {
    try {
      const testClientInstance: testClient =
        this.__page_injector__.get(testClient);

      let outputVariables = await testClientInstance.dynamicApiCall(
        this.page.addUserPath,
        this.page.dm.login,
        this.page.postMethod
      );
      bh.response = outputVariables.local.results;

      bh = this.sd_mICRa0nZSam9fQCt(bh);
      //appendnew_next_sd_mX7yTDCeIHSrE7xI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mX7yTDCeIHSrE7xI');
    }
  }

  sd_mICRa0nZSam9fQCt(bh) {
    try {
      const page = this.page;
      page.user = bh.response[0];
      bh = this.storeUserLocally(bh);
      //appendnew_next_sd_mICRa0nZSam9fQCt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mICRa0nZSam9fQCt');
    }
  }

  storeUserLocally(bh) {
    try {
      sessionStorage.setItem('currentUser', JSON.stringify(this.page.user));
      bh = this.sd_ds4nu8vNCzeDezcc(bh);
      //appendnew_next_storeUserLocally
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Dei1rYINYmfxXl4k');
    }
  }

  async sd_ds4nu8vNCzeDezcc(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['cont'](
          this.page.user.role,
          'Manager',
          undefined,
          undefined
        )
      ) {
        bh = this.manager(bh);
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
        bh = await this.employee(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ds4nu8vNCzeDezcc');
    }
  }

  async manager(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/man/options');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_manager
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Z9PfqgDEcJWV3e2n');
    }
  }

  async employee(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/emp');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_employee
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_804ksGHAet75KgZI');
    }
  }

  sd_Wjs9i9mTF9qVIpgT(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Form Invalid', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_Wjs9i9mTF9qVIpgT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Wjs9i9mTF9qVIpgT');
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
  //appendnew_flow_loginComponent_Catch
}
