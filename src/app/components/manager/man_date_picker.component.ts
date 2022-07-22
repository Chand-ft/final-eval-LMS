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
  selector: 'bh-man_date_picker',
  templateUrl: './man_date_picker.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class man_date_pickerComponent {
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
      this.sd_hkH5reJPnoT0HbqH(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_hkH5reJPnoT0HbqH(bh) {
    try {
      bh = this.sd_p8McjKMjrnIN0KzG(bh);
      //appendnew_next_sd_hkH5reJPnoT0HbqH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hkH5reJPnoT0HbqH');
    }
  }

  logForm(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_PHIYvYUevmEqNPiK(bh);
      //appendnew_next_logForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lKXuMHDaIvCGEyq9');
    }
  }

  //appendnew_flow_man_date_pickerComponent_start

  sd_p8McjKMjrnIN0KzG(bh) {
    try {
      this.page.dateOfBirth = undefined;
      this.page.leaveTypes = undefined;
      this.page.currentUser = {};
      bh = this.sd_4Bb033ntCqwIyzRn(bh);
      //appendnew_next_sd_p8McjKMjrnIN0KzG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_p8McjKMjrnIN0KzG');
    }
  }

  sd_4Bb033ntCqwIyzRn(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_mTWQwuXkV5X55cOA(bh);
      //appendnew_next_sd_4Bb033ntCqwIyzRn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4Bb033ntCqwIyzRn');
    }
  }

  sd_mTWQwuXkV5X55cOA(bh) {
    try {
      const page = this.page;
      page.dateOfBirth = new FormGroup({
        startDate: new FormControl('', [Validators.required]),
        endDate: new FormControl('', [Validators.required]),
        leaveType: new FormControl('', [Validators.required]),
        textArea: new FormControl(''),
        status: new FormControl('pending'),
      });

      bh = this.sd_PRJPz22SNaqwB4td(bh);
      //appendnew_next_sd_mTWQwuXkV5X55cOA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mTWQwuXkV5X55cOA');
    }
  }

  sd_PRJPz22SNaqwB4td(bh) {
    try {
      const page = this.page;
      page.leaveTypes = [
        { leaveType: 'Sick' },
        { leaveType: 'Annual' },
        { leaveType: 'Compassionate' },
        { leaveType: 'Special' },
      ];
      bh = this.getUserLocally(bh);
      //appendnew_next_sd_PRJPz22SNaqwB4td
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PRJPz22SNaqwB4td');
    }
  }

  getUserLocally(bh) {
    try {
      this.page.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
      //appendnew_next_getUserLocally
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0fSz067kGKP0DdKV');
    }
  }

  sd_PHIYvYUevmEqNPiK(bh) {
    try {
      const page = this.page;
      console.log('form', page.dateOfBirth);
      console.log('type', page.dateOfBirth.controls.leaveType.value);

      bh = this.sd_Cp7eUIJQdoHxhQml(bh);
      //appendnew_next_sd_PHIYvYUevmEqNPiK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PHIYvYUevmEqNPiK');
    }
  }

  sd_Cp7eUIJQdoHxhQml(bh) {
    try {
      const page = this.page; // console.log("type",page.dateOfBirth.controls.leaveType.value);
      // page.dateOfBirth

      bh.input.path = 'storeLeaveRequest';
      bh.input.method = 'Post';
      page.dateOfBirth.value.owner = page.currentUser.email;
      bh.input.body = page.dateOfBirth.value;

      console.log('form', page.dateOfBirth);
      console.log('value', page.dateOfBirth.value);

      bh = this.sd_MxuPrxBvCkHmihBN(bh);
      //appendnew_next_sd_Cp7eUIJQdoHxhQml
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Cp7eUIJQdoHxhQml');
    }
  }

  async sd_MxuPrxBvCkHmihBN(bh) {
    try {
      const testClientInstance: testClient =
        this.__page_injector__.get(testClient);

      let outputVariables = await testClientInstance.dynamicApiCall(
        bh.input.path,
        bh.input.body,
        bh.input.method
      );

      bh = this.sd_qEa6KH2v57IZTRVc(bh);
      //appendnew_next_sd_MxuPrxBvCkHmihBN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MxuPrxBvCkHmihBN');
    }
  }

  sd_qEa6KH2v57IZTRVc(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Successfully submitted', '', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_ytHft7VVISZrB7Jp(bh);
      //appendnew_next_sd_qEa6KH2v57IZTRVc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qEa6KH2v57IZTRVc');
    }
  }

  async sd_ytHft7VVISZrB7Jp(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/man/new');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_ytHft7VVISZrB7Jp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ytHft7VVISZrB7Jp');
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
  //appendnew_flow_man_date_pickerComponent_Catch
}
