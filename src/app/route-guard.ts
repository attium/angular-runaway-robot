import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { StateGeneratorService } from "./services/state-generator.service";
import { Injectable } from "@angular/core";

@Injectable()
export class CanActivateRoute implements CanActivate {
    constructor(private stateGeneratorService : StateGeneratorService) {}
  
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
     ) : boolean {
      return this.stateGeneratorService.canActivate();
    }
  }
  