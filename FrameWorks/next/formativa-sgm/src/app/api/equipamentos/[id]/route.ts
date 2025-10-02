import { deleteEquipamento, getOneEquipamento, updateEquipamento } from "@/controllers/EquipamentoController";
import { NextRequest, NextResponse } from "next/server";

interface Parametro{
    id:string
}

export async function PATCH(req: NextRequest, {params}:{params: Parametro}) {
    try {
        const {id} = params
        const data = await req.json()
        const EquipamentoAtualizado = await updateEquipamento(id, data)
        if(!EquipamentoAtualizado){
           return NextResponse.json({success: false, error:"Not Found"}) 
        }
        return NextResponse.json({success: true, data: EquipamentoAtualizado})
    } catch (error) {
        return NextResponse.json({success:false, error:error})       
    }
}

export async function GET({params}:{params: Parametro}) {
    try {
        const {id} = params
        const data = await getOneEquipamento(id)
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
        await deleteEquipamento(id)
        return NextResponse.json({success:true, data:{}})
    } catch (error) {
        return NextResponse.json({success:false, error:error})
    }
}