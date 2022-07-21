import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-emp_available_daysComponent
import { emp_available_daysComponent } from '../components/employee/emp_available_days.component';
//CORE_REFERENCE_IMPORT-man_date_pickerComponent
import { man_date_pickerComponent } from '../components/manager/man_date_picker.component';
//CORE_REFERENCE_IMPORT-emp_date_pickerComponent
import { emp_date_pickerComponent } from '../components/employee/emp_date_picker.component';
//CORE_REFERENCE_IMPORT-base_layoutComponent
import { base_layoutComponent } from '../components/admin/base_layout.component';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/admin/login.component';
//CORE_REFERENCE_IMPORT-registerComponent
import { registerComponent } from '../components/admin/register.component';
//CORE_REFERENCE_IMPORT-man_optionsComponent
import { man_optionsComponent } from '../components/manager/man_options.component';
//CORE_REFERENCE_IMPORT-submit_new_requestComponent
import { submit_new_requestComponent } from '../components/manager/submit_new_request.component';
//CORE_REFERENCE_IMPORT-veiw_requestsComponent
import { veiw_requestsComponent } from '../components/manager/veiw_requests.component';
//CORE_REFERENCE_IMPORT-man_landingComponent
import { man_landingComponent } from '../components/manager/man_landing.component';
//CORE_REFERENCE_IMPORT-emp_landingComponent
import { emp_landingComponent } from '../components/employee/emp_landing.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-emp_available_daysComponent
  emp_available_daysComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-man_date_pickerComponent
  man_date_pickerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-emp_date_pickerComponent
  emp_date_pickerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-base_layoutComponent
  base_layoutComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
  loginComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-registerComponent
  registerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-man_optionsComponent
  man_optionsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-submit_new_requestComponent
  submit_new_requestComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-veiw_requestsComponent
  veiw_requestsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-man_landingComponent
  man_landingComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-emp_landingComponent
  emp_landingComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  {
    path: 'home',
    component: base_layoutComponent,
    children: [
      { path: 'login', component: loginComponent },
      { path: 'register', component: registerComponent },
      { path: 'emp', component: emp_landingComponent },
      {
        path: 'man',
        component: man_landingComponent,
        children: [
          { path: 'new', component: submit_new_requestComponent },
          { path: 'view', component: veiw_requestsComponent },
          { path: 'options', component: man_optionsComponent },
        ],
      },
      { path: 'emp-date', component: emp_date_pickerComponent },
      { path: 'man-date', component: man_date_pickerComponent },
      { path: 'emp-available', component: emp_available_daysComponent },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
