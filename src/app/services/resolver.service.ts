import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any>{

  constructor( private dataService: DataService) { }
  resolve(route: ActivatedRouteSnapshot) {

    return this.dataService.getData(route.paramMap.get('id'));
  }
}
