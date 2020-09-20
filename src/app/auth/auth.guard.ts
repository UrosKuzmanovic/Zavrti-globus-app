import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { AuthService } from "./auth.service";
import { switchMap, take, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.userIsAuthenticated.pipe(
      take(1),
      switchMap((isAuth) => {
        if (!isAuth) {
          return this.authService.autoLogin();
        } else {
          return of(isAuth);
        }
      }),
      tap((isAuth) => {
        if (!isAuth) {
          this.router.navigateByUrl("/auth");
        }
      })
    );
  }
}
