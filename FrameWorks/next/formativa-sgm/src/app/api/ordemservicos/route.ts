import { createOrdem, getAllOrdem } from "@/controllers/OrdemServicoController";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {

    try {
        const data = await getAllOrdem()
        return NextResponse.json({success: true, data:data})
    } catch (error) {
        return NextResponse.json({success: false, error:error})
    }
}

export async function POST(req: NextRequest) {
    try {
        const data = await req.json()
        const newOrdem = await createOrdem(data)
        return NextResponse.json({success: true, data: newOrdem})
    } catch (error) {
        return NextResponse.json({success: false, error:error})
    }
}