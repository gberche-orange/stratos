import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { AppState } from '../app-state';
import { IRequestAction, WrapperRequestActionFailed, WrapperRequestActionSuccess, StartRequestAction } from './../types/request.types';
import { FetchUserProfileAction, GET_USERPROFILE } from '../actions/user-profile.actions';
import { userProfileSchemaKey } from '../helpers/entity-factory';
import { userProfileStoreNames, UserProfileInfo } from '../types/user-profile.types';
import { environment } from './../../../environments/environment.prod';

const { proxyAPIVersion } = environment;

@Injectable()
export class UserProfileEffect {

  public static guid = 'userProfile';

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private httpClient: HttpClient,
  ) { }

  @Effect() getUserProfileInfo$ = this.actions$.ofType<FetchUserProfileAction>(GET_USERPROFILE)
    .mergeMap(action => {
      const apiAction = {
        entityKey: userProfileStoreNames.type,
        guid: UserProfileEffect.guid,
        type: action.type,
      } as IRequestAction;
      this.store.dispatch(new StartRequestAction(apiAction));
      const actionType = 'fetch';
      return this.httpClient.get(`/pp/${proxyAPIVersion}/uaa/Users/${action.guid}`)
        .mergeMap((info: UserProfileInfo) => {
          return [
            new WrapperRequestActionSuccess({ entities: { [userProfileStoreNames.type]: {[UserProfileEffect.guid]: info }},
              result: [UserProfileEffect.guid] }, apiAction)
          ];
        }).catch((e) => {
          return [
            new WrapperRequestActionFailed('Could not get User Profile Info', apiAction),
          ];
        });
    });
}
