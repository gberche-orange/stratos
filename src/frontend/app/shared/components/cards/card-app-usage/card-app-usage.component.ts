import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, share } from 'rxjs/operators';

import { ApplicationMonitorService } from '../../../../features/applications/application-monitor.service';
import { ApplicationService } from '../../../../features/applications/application.service';
import { CardStatus } from '../../application-state/application-state.service';
import { pathGet } from '../../../../core/utils.service';

@Component({
  selector: 'app-card-app-usage',
  templateUrl: './card-app-usage.component.html',
  styleUrls: ['./card-app-usage.component.scss']
})
export class CardAppUsageComponent implements OnInit {

  constructor(private appService: ApplicationService, private appMonitor: ApplicationMonitorService) { }

  appData$: Observable<any>;
  status$: Observable<CardStatus>;

  ngOnInit() {
    this.appData$ = Observable.combineLatest(
      this.appMonitor.appMonitor$.startWith(null),
      this.appService.applicationRunning$,
    ).pipe(
      map(([monitor, isRunning]) => ({
        monitor: monitor,
        isRunning: isRunning,
        status: !isRunning ? 'tentative' : pathGet('status.usage', monitor)
      })),
      share()
    );
    this.status$ = this.appData$.pipe(
      map(data => data.status)
    );
  }
}
