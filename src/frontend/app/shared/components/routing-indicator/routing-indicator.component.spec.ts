import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingIndicatorComponent } from './routing-indicator.component';
import { CoreModule } from '../../../core/core.module';
import { MatProgressBarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

describe('RoutingIndicatorComponent', () => {
  let component: RoutingIndicatorComponent;
  let fixture: ComponentFixture<RoutingIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RoutingIndicatorComponent
      ],
      imports: [
        RouterTestingModule,
        CoreModule,
        MatProgressBarModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
