import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private url='https://identitytoolkit.googleapis.com/v1/accounts'
private apikey='AIzaSyDTCrBBVrSsLSbBkAEtT1gjfdgLIc7rdgo'
userToken:any;

//REGUISTER

// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
//https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  constructor(private http:HttpClient) { 
    this.leerToken();
  }

logout(){
localStorage.removeItem('token');

}

login(usuario: UsuarioModel){
  const authData={
    ...usuario,
    returnSecureToken:true
  };
  return this.http.post(
    `${this.url}:signInWithPassword?key=${this.apikey}`,
    authData
  ).pipe(
    map( (resp:any)=>{
  
      console.log('Entro en le mapa de RXJS')
      this.saveToken( resp [ 'idToken'] );
      return resp;
    })
  );
}
nuevoUsuario(usuario:UsuarioModel){
  const authData={
    ...usuario,
    returnSecureToken:true
  };
  return this.http.post(
    `${this.url}:signUp?key=${this.apikey}`,
    authData
  ) .pipe(
    map((resp:any)=>{
      console.log('Entro en le mapa de RXJS')
      this.saveToken( resp ['idToken'] );
      return resp;
    })
  );
}



private saveToken(idToken:string){
  this.userToken=idToken;
  localStorage.setItem('token', idToken);
}


leerToken(){

}
estaAutenticado():boolean{
return this.userToken.length>2;
}}
