import { deleteOrdem, getOneOrdem, updateOrdem } from "@/controllers/OrdemServicoController";
import { NextRequest, NextResponse } from "next/server";

interface Parametro{
    id:string
}

export async function PATCH(req: NextRequest, {params}:{params: Parametro}) {
    try {
        const {id} = params
        const data = await req.json()
        const OrdemAtualizado = await updateOrdem(id, data)
        if(!OrdemAtualizado){
           return NextResponse.json({success: false, error:"Not Found"}) 
        }
        return NextResponse.json({success: true, data: OrdemAtualizado})
    } catch (error) {
        return NextResponse.json({success:false, error:error})       
    }
}

export async function GET({params}:{params: Parametro}) {
    try {
        const {id} = params
        const data = await getOneOrdem(id)
        if(!data){
           return NextResponse.json({success: false, error:"Not Found"}) 
        }
        return NextResponse.json({success: true, data: data})
    } catch (error) {
        return NextResponse.json({success:false, error:error})
    }
}

export async function DELETE({params}:{params: Parametro}) {
    try {
        const {id} = params
        await deleteOrdem(id)
        return NextResponse.json({success:true, data:{}})
    } catch (error) {
        return NextResponse.json({success:false, error:error})
    }
}