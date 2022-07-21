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
        { leaveType: 'Maternity' },
        { leaveType: 'Special' },
      ];
      //appendnew_next_sd_PRJPz22SNaqwB4td
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PRJPz22SNaqwB4td');
    }
  }

  sd_PHIYvYUevmEqNPiK(bh) {
    try {
      const page = this.page;
      console.log('form', page.dateOfBirth);

      console.log('type', page.dateOfBirth.controls.leaveType.value);

      //appendnew_next_sd_PHIYvYUevmEqNPiK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PHIYvYUevmEqNPiK');
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
