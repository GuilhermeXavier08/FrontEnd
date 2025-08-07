import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { catchError, map, Observable, switchMap, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3014/usuarios';
  private readonly CHAVE_AUTH = 'usuarioLogado';

  constructor(private router: Router, private http: HttpClient) {}

  registrar(usuario: any): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${usuario.email}`).pipe(
      switchMap((usuarios) => {
        if (usuarios.length > 0) {
          return throwError(() => new Error('Usuário já cadastrado'));
        } else {
          return this.http.post(this.apiUrl, usuario);
        }
      })
    );
  }

  login(credenciais: any):Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${credenciais.email}&senha=${credenciais.senha}`).pipe(
      map(usuarios => {
        if (usuarios.length>0) {
          localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(usuarios[0]));
          return true;
        }else{
          // fazer um erro
          return false;
        }
      })
    )
  }
  

  logout() {}
}
