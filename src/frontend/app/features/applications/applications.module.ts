import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { ApplicationMonitorService } from './application-monitor.service';
import { ApplicationWallComponent } from './application-wall/application-wall.component';
import { ApplicationService } from './application.service';
import { ApplicationBaseComponent } from './application/application-base.component';
import { ApplicationTabsBaseComponent } from './application/application-tabs-base/application-tabs-base.component';
import { ApplicationEnvVarsService } from './application/application-tabs-base/tabs/build-tab/application-env-vars.service';
import { BuildTabComponent } from './application/application-tabs-base/tabs/build-tab/build-tab.component';
import {
  ViewBuildpackComponent,
} from './application/application-tabs-base/tabs/build-tab/view-buildpack/view-buildpack.component';
import { EventsTabComponent } from './application/application-tabs-base/tabs/events-tab/events-tab.component';
import { GithubTabComponent } from './application/application-tabs-base/tabs/github-tab/github-tab.component';
import { InstancesTabComponent } from './application/application-tabs-base/tabs/instances-tab/instances-tab.component';
import { LogStreamTabComponent } from './application/application-tabs-base/tabs/log-stream-tab/log-stream-tab.component';
import { MetricsTabComponent } from './application/application-tabs-base/tabs/metrics-tab/metrics-tab.component';
import { RoutesTabComponent } from './application/application-tabs-base/tabs/routes-tab/routes-tab/routes-tab.component';
import { ServicesTabComponent } from './application/application-tabs-base/tabs/services-tab/services-tab.component';
import { VariablesTabComponent } from './application/application-tabs-base/tabs/variables-tab/variables-tab.component';
import { ApplicationsRoutingModule } from './applications.routing';
import { EditApplicationComponent } from './edit-application/edit-application.component';
import { AddRouteStepperComponent } from './routes/add-route-stepper/add-route-stepper.component';
import { AddRoutesComponent } from './routes/add-routes/add-routes.component';
import { MapRoutesComponent } from './routes/map-routes/map-routes.component';
import { SshApplicationComponent } from './ssh-application/ssh-application.component';
import { CliInfoApplicationComponent } from './cli-info-application/cli-info-application.component';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    ApplicationsRoutingModule
  ],
  declarations: [
    ApplicationWallComponent,
    ApplicationBaseComponent,
    EventsTabComponent,
    LogStreamTabComponent,
    ServicesTabComponent,
    BuildTabComponent,
    VariablesTabComponent,
    ViewBuildpackComponent,
    ApplicationTabsBaseComponent,
    SshApplicationComponent,
    EditApplicationComponent,
    InstancesTabComponent,
    AddRoutesComponent,
    GithubTabComponent,
    MapRoutesComponent,
    AddRouteStepperComponent,
    CliInfoApplicationComponent,
    MetricsTabComponent,
    RoutesTabComponent,
  ],
  providers: [
    ApplicationService,
    ApplicationEnvVarsService,
    ApplicationMonitorService,
    DatePipe
  ]
})
export class ApplicationsModule { }
