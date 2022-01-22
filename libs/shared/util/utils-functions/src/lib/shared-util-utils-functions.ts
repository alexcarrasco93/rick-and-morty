import { HttpParams } from '@angular/common/http';

export function buildQueryParams(source: any): HttpParams {
  let target: HttpParams = new HttpParams();
  Object.keys(source).forEach((key: string) => {
    const value: string | number | boolean | Date = source[key];
    if (
      typeof value !== 'undefined' &&
      value !== null &&
      value !== 'null' &&
      value !== 'undefined'
    ) {
      target = target.append(key, value.toString());
    }
  });
  return target;
}
