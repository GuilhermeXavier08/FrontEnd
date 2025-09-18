//criar as rotas que nao precisam de id (get, post)

import { createTarefa, readAllTarefas } from "@/controllers/tarefaController";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const tarefas = await readAllTarefas(); //chama o controlador
        //tratar a reposta obtida pelo mongoDB
        return NextResponse.json({success:true, data: tarefas})
    } catch (error) {
        return NextResponse.json({success:false, error: error})
    }
}

export async function POST(req: NextRequest) {//req sao os dados que estou enviando
    try {
        const data = await req.json(); //verifica se os dados estao em formato json
        const newTarefa = await createTarefa(data); //chama o controller
        return NextResponse.json({success:true, data: newTarefa})
    } catch (error) {
        return NextResponse.json({success:false, error: error})
    }
}