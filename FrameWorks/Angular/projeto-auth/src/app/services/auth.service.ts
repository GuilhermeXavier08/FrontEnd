import { HttpClient } from '@angular/common/http';
import { LocalizedString } from '@angular/compiler';
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
  //primeiro busca no banco se email do cadstro já existe
  registrar(usuario: any): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${usuario.email}`).pipe(
      switchMap((usuarios) => {
        if (usuarios.length > 0) {//caso exista
          //cria uma mensagem de erro para ser tratado no try/catch
          return throwError(() => new Error('Usuário já cadastrado'));
        } else {//caso não exista
          //cadastra o usuário no BD
          return this.http.post(this.apiUrl, usuario);
        }
      })
    );
  }

  login(credenciais: any):Observable<boolean> {
    //pega as credenciais do usuário (email e senha)
    return this.http.get<any[]>(
      //verifica no BD se email e senha foram encontrados
      `${this.apiUrl}?email=${credenciais.email}&senha=${credenciais.senha}`
      ).pipe(
      map(usuarios => {
        if (usuarios.length>0) {//se foi encontrado
          //armazena as informações do usuário e a chave no LocalStorage
          localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(usuarios[0]));
          //retorna que o acesso foi permitido
          return true;
        }else{//caso não encontrado
          // fazer um erro
          //retorno que meu usuário não esta permitido o acesso
          return false;
        }
      })
    )
  }


  logout() {
    localStorage.removeItem(this.CHAVE_AUTH); //remove a chave de autenticação do usuário
    this.router.navigate(['/home']); //redireciona para a pagina home
  }

  //verifica se o usuário já está logado (CHAVE_AUTH)
  estaAutenticado():boolean{
    //vou transformar uma variavel do tipo texto em boolean
    return !!localStorage.getItem(this.CHAVE_AUTH); ///vai retornar true ou false
  }
  // pegar as informações do usuário no LocalStorage
  getUsuarioAtual():any{
    //retorna as informações do usuário autenticado, que estão armazenadas no LocalStorage
    return JSON.parse(localStorage.getItem(this.CHAVE_AUTH) || "{}");
  }
}
