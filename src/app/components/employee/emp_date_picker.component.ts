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
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  ValidationErrors,
} from '@angular/forms'; //_splitter_
import { testClient } from 'app/sd-services/testClient'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-emp_date_picker',
  templateUrl: './emp_date_picker.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class emp_date_pickerComponent {
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
      this.sd_QRBN1Z90RqseAvl1(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_QRBN1Z90RqseAvl1(bh) {
    try {
      bh = this.sd_InhKQBmmZ7aQngZp(bh);
      //appendnew_next_sd_QRBN1Z90RqseAvl1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QRBN1Z90RqseAvl1');
    }
  }

  logForm(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_esNl6hQ7tmSXjqrC(bh);
      //appendnew_next_logForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VTxShfwqfy5a9Jyb');
    }
  }

  //appendnew_flow_emp_date_pickerComponent_start

  sd_InhKQBmmZ7aQngZp(bh) {
    try {
      this.page.dateOfBirth = undefined;
      this.page.leaveTypes = undefined;
      this.page.showExpandOnSpecialLeave = false;
      this.page.currentUser = {};
      bh = this.sd_RbxFkgHvbmRtvIx2(bh);
      //appendnew_next_sd_InhKQBmmZ7aQngZp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_InhKQBmmZ7aQngZp');
    }
  }

  sd_RbxFkgHvbmRtvIx2(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_JcWeQLPegslL7CtY(bh);
      //appendnew_next_sd_RbxFkgHvbmRtvIx2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RbxFkgHvbmRtvIx2');
    }
  }

  sd_JcWeQLPegslL7CtY(bh) {
    try {
      const page = this.page;
      page.dateOfBirth = new FormGroup({
        startDate: new FormControl('', [Validators.required]),
        endDate: new FormControl('', [Validators.required]),
        leaveType: new FormControl('', [Validators.required]),
        textArea: new FormControl(''),
        status: new FormControl('pending'),
      });

      bh = this.sd_6UXqYU0a8YcPaN2S(bh);
      //appendnew_next_sd_JcWeQLPegslL7CtY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JcWeQLPegslL7CtY');
    }
  }

  sd_6UXqYU0a8YcPaN2S(bh) {
    try {
      const page = this.page;
      page.leaveTypes = [
        { leaveType: 'Sick' },
        { leaveType: 'Annual' },
        { leaveType: 'Compationate' },
        { leaveType: 'Special' },
      ];
      bh = this.getUserLocally(bh);
      //appendnew_next_sd_6UXqYU0a8YcPaN2S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6UXqYU0a8YcPaN2S');
    }
  }

  getUserLocally(bh) {
    try {
      this.page.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
      //appendnew_next_getUserLocally
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dqnY4eqAC7lpyRYz');
    }
  }

  sd_esNl6hQ7tmSXjqrC(bh) {
    try {
      const page = this.page; // console.log("type",page.dateOfBirth.controls.leaveType.value);
      // page.dateOfBirth

      bh.input.path = 'storeLeaveRequest';
      bh.input.method = 'Post';
      page.dateOfBirth.value.owner = page.currentUser.email;
      page.dateOfBirth.value.reportingManager =
        page.currentUser.reportingManager;
      bh.input.body = page.dateOfBirth.value;

      console.log('form', page.dateOfBirth);
      console.log('value', page.dateOfBirth.value);

      bh = this.sd_f48KjRJ8BayhRXvf(bh);
      //appendnew_next_sd_esNl6hQ7tmSXjqrC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_esNl6hQ7tmSXjqrC');
    }
  }

  async sd_f48KjRJ8BayhRXvf(bh) {
    try {
      const testClientInstance: testClient =
        this.__page_injector__.get(testClient);

      let outputVariables = await testClientInstance.dynamicApiCall(
        bh.input.path,
        bh.input.body,
        bh.input.method
      );

      bh = this.sd_gOsYmt81v9Wc0DfG(bh);
      //appendnew_next_sd_f48KjRJ8BayhRXvf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_f48KjRJ8BayhRXvf');
    }
  }

  sd_gOsYmt81v9Wc0DfG(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Successfully submitted', '', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_7AflfA0ODoLxPUna(bh);
      //appendnew_next_sd_gOsYmt81v9Wc0DfG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gOsYmt81v9Wc0DfG');
    }
  }

  async sd_7AflfA0ODoLxPUna(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/emp');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_7AflfA0ODoLxPUna
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7AflfA0ODoLxPUna');
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
  //appendnew_flow_emp_date_pickerComponent_Catch
}
