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
  selector: 'bh-emp_available_days',
  templateUrl: './emp_available_days.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class emp_available_daysComponent {
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
      this.sd_s0PTVa3kkkN61kSE(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_s0PTVa3kkkN61kSE(bh) {
    try {
      bh = this.sd_jI86YhGKSFtg8kw4(bh);
      //appendnew_next_sd_s0PTVa3kkkN61kSE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s0PTVa3kkkN61kSE');
    }
  }

  logForm(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_wa5b0nC60jXWh0zb(bh);
      //appendnew_next_logForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_umhw3BpwRmjlX0OL');
    }
  }

  //appendnew_flow_emp_available_daysComponent_start

  sd_jI86YhGKSFtg8kw4(bh) {
    try {
      bh = this.sd_30agkQAUUWgS3Nmc(bh);
      //appendnew_next_sd_jI86YhGKSFtg8kw4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jI86YhGKSFtg8kw4');
    }
  }

  sd_30agkQAUUWgS3Nmc(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_HJvA40CV5Vg8HYB2(bh);
      //appendnew_next_sd_30agkQAUUWgS3Nmc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_30agkQAUUWgS3Nmc');
    }
  }

  sd_HJvA40CV5Vg8HYB2(bh) {
    try {
      const page = this.page;
      page.dateOfBirth = new FormGroup({
        startDate: new FormControl('', [Validators.required]),
        endDate: new FormControl('', [Validators.required]),
        leaveType: new FormControl('', [Validators.required]),
        textArea: new FormControl(''),
      });

      bh = this.sd_oxczA7AP3OGv5jJX(bh);
      //appendnew_next_sd_HJvA40CV5Vg8HYB2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HJvA40CV5Vg8HYB2');
    }
  }

  sd_oxczA7AP3OGv5jJX(bh) {
    try {
      const page = this.page;
      page.leaveTypes = [
        { leaveType: 'Sick' },
        { leaveType: 'Annual' },
        { leaveType: 'Compationate' },
        { leaveType: 'Maternity' },
        { leaveType: 'Special' },
      ];
      //appendnew_next_sd_oxczA7AP3OGv5jJX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oxczA7AP3OGv5jJX');
    }
  }

  sd_wa5b0nC60jXWh0zb(bh) {
    try {
      const page = this.page;
      console.log('form', page.dateOfBirth);

      console.log('type', page.dateOfBirth.controls.leaveType.value);

      //appendnew_next_sd_wa5b0nC60jXWh0zb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wa5b0nC60jXWh0zb');
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
  //appendnew_flow_emp_available_daysComponent_Catch
}
