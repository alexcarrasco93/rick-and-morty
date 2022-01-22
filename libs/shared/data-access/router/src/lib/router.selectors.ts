import { getSelectors } from '@ngrx/router-store';

export const {
  selectCurrentRoute,
  selectFragment,
  selectQueryParams,
  selectQueryParam,
  selectRouteParams,
  selectRouteParam,
  selectRouteData,
  selectUrl,
} = getSelectors();

export const selectParamId = selectRouteParam('id');
