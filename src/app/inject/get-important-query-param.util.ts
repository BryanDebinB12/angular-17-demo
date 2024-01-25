import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

export const importantQueryParamName = 'importantQueryParam';

// use inject to fetch activated route and get query params
export function getImportantQueryParam$() {
  const activatedRoute = inject(ActivatedRoute);
  return activatedRoute.queryParams.pipe(
    map((params) => params[importantQueryParamName])
  );
}
