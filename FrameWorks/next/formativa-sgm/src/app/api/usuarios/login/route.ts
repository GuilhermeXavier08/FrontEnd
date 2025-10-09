//criar a solicitação de login do usuário http Request para o backend do login
//jwt ->vai gerar o token de autenticacao

import { autenticaUsuario } from "@/controllers/UsuarioController";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

//verificar se o jwt esta inserido no enviroment(variaveis de ambiente do projeto)

const JWT_SECRET = process.env.JWT_KEY;

//verificar se a chave esta no .env.local
if (!JWT_SECRET) {
    throw new Error("JWT_KEY não está definida nas variáveis de ambiente!")
}

//comeca com o metodo de autenticacao
export async function POST(req: NextRequest) { //pega as informacoes do html
    try {
        const {email,senha} = await req.json()
        //validar os dados obtidos do client-side
        if (!email || !senha) {
            return NextResponse.json({
                success: false, error: "Email e Senha obrigatórios!"
            })
        }
        const usuario = await autenticaUsuario(email, senha)
        if(!usuario){
            return NextResponse.json({
                success: false, error: "Email ou Senha inválido"
            })
        }
        // continuo para gerar o token(jwt)
        //gerar o token permite acessar as paginas adiantes
        const token = jwt.sign(
            {id: usuario._id, nome: usuario.nome, funcao: usuario.funcao},
            JWT_SECRET as string,
            {expiresIn: '1h'}
        );
        return NextResponse.json({
            success: true,
            token,
            usuario: {id: usuario.id, nome: usuario.nome, funcao: usuario.funcao}
        })
    } catch (error) {
        return NextResponse.json({
            success: false, error: error
        })
    }
}