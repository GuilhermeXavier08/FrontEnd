import { createEquipamento, getAllEquipamento } from "@/controllers/EquipamentoController";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {

    try {
        const data = await getAllEquipamento()
        return NextResponse.json({success: true, data:data})
    } catch (error) {
        return NextResponse.json({success: false, error:error})
    }
}

export async function POST(req: NextRequest) {
    try {
        const data = await req.json()
        const newEquipamento = await createEquipamento(data)
        return NextResponse.json({success: true, data: newEquipamento})
    } catch (error) {
        return NextResponse.json({success: false, error:error})
    }
}