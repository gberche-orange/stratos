import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { MDAppModule } from '../../../core/md.module';
import { StepComponent } from '../../../shared/components/stepper/step/step.component';
import { SteppersComponent } from '../../../shared/components/stepper/steppers/steppers.component';
import { ConsoleUaaWizardComponent } from './console-uaa-wizard.component';
import { DotContentComponent } from '../../../core/dot-content/dot-content.component';
import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';
import { IntroScreenComponent } from '../../../shared/components/intro-screen/intro-screen.component';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { StratosTitleComponent } from '../../../shared/components/stratos-title/stratos-title.component';
import { LoadingPageComponent } from '../../../shared/components/loading-page/loading-page.component';
import { PageHeaderModule } from '../../../shared/components/page-header/page-header.module';
import { InternalEventMonitorFactory } from '../../../shared/monitors/internal-event-monitor.factory';
import { CloudFoundryService } from '../../../shared/data-services/cloud-foundry.service';
import { PaginationMonitorFactory } from '../../../shared/monitors/pagination-monitor.factory';
import { SetupModule } from '../setup.module';

describe('ConsoleUaaWizardComponent', () => {
  let component: ConsoleUaaWizardComponent;
  let fixture: ComponentFixture<ConsoleUaaWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        SharedModule,
        SetupModule,
        RouterTestingModule,
        FormsModule,
        PageHeaderModule,
        ReactiveFormsModule,
        MDAppModule,
        StoreModule.forRoot({}),
        BrowserAnimationsModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleUaaWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
