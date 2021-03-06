import { RequestMethod } from '@angular/http';
import { Action } from '@ngrx/store';

import { ActionState } from '../reducers/api-request-reducer/types';
import { IRequestAction } from './request.types';

export class QParam {
  constructor(
    public key: string,
    public value: string | string[],
    public joiner: '>=' | '<=' | '<' | '>' | ' IN ' | ':' | '=' = ':'
  ) { }
}

export interface PaginationParam {
  q?: QParam[];
  [entityKey: string]: any;
}

export interface PaginationClientFilter {
  string: string;
  items: {
    [key: string]: any;
  };
}

export class PaginationEntityState {
  currentPage = 0;
  totalResults = 0;
  pageCount = 0;
  ids = {};
  params: PaginationParam;
  pageRequests: {
    [pageNumber: string]: ActionState
  };
  clientPagination?: {
    pageSize: number,
    currentPage: number,
    filter: PaginationClientFilter,
    totalResults: number
  };
  /**
   * The pagination key from where we share our values.
   */
  seed?: string;
}

export interface PaginationAction extends Action {
  entityKey: string;
  paginationKey: string;
}

export interface PaginatedAction extends PaginationAction, IRequestAction {
  actions: string[];
  flattenPagination?: boolean;
  initialParams?: PaginationParam;
  pageNumber?: number;
  options?: {
    params?: {
      paramsMap: any;
    },
    method?: RequestMethod | string | null
  };
}

export interface PaginationEntityTypeState {
  [paginationKey: string]: PaginationEntityState;
}

export interface PaginationState {
  [entityKey: string]: PaginationEntityTypeState;
}
