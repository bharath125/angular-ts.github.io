import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

import { repos } from './repo';

@Injectable()
export class GithubService {

  baseURL: string = "https://api.github.com/";
  //params: HttpParams | { [param: string]: string | number | boolean | readonly (string | number | boolean)[]; } | undefined;

  constructor(private http:HttpClient) { }

  // getRepos(userName:String):Observable<any>{
  //   return this.http.get(this.baseURL+'users/'+userName+'/repos',{observe:'response',reportProgress:true})
  // }

  // getReposCatchError(userName:string):Observable<repos[]>{
  //     return this.http.get<repos[]>(this.baseURL+'usersY/'+userName+'/repos').pipe(
  //       catchError((err)=>{
  //         console.error(err)
  //         throw err
  //       })
  //     )
  // }

  // getReposMap(userName:string):Observable<repos[]>{
  //   return this.http.get<repos[]>(this.baseURL+'users/'+userName+'/repos').pipe(
  //     map((data)=>{
  //       return data
  //     }),
  //     catchError((err,caught)=>{
  //       console.log(err)
  //       throw err
  //     })
  //   )
  // }

  

  // getReposUrlParameter(userName:string,PageNo:string,SortOn:string):Observable<repos[]>{

  //   const params=new HttpParams()
  //     .set('sort',PageNo)
  //     .set('page',SortOn)

  //   const headers=new HttpHeaders()
  //   .set('Content-Type','application/json')

  //   console.log(params.toString())

  //   return this.http.get<repos[]>(this.baseURL+'user/'+userName+'/repos',{params})
    
  // }

  getRepos(userName: string): Observable<any> {
    return this.http.get(this.baseURL + 'usersY/' + userName + '/repos')
  }
 

  getReposCatchError(userName:string):Observable<any>{
    return this.http.get(this.baseURL+'userY/'+userName+'/repos')
    .pipe(
      catchError((err)=>{
        console.log('error caught in service')
        console.error(err)
        return throwError(err)
      })
    )
  }

}
