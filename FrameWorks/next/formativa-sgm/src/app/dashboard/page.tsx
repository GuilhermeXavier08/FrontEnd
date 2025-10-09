"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import DashboardTecnico from "../componentes/dashboards/DashboardTecnico";
import DashboardGerente from "../componentes/dashboards/DashboardGerente";
import DashboardAdmin from "../componentes/dashboards/DashboardAdmin";

export default function DashboardPage() {
    const route = useRouter();
    const [funcao, setFuncao] = useState<string | null>(null);

    useEffect(() => {
        const funcao = localStorage.getItem("funcao")
        if (!funcao) {
            route.push("/login")
        } else {
            setFuncao(funcao)
        }
    })

    //metodo de logout
    const handleLogout = async () => {
        localStorage.removeItem("token");
        localStorage.removeItem("funcao");
        route.push("/login")
    }

    const renderDashboard = () => {
        if (funcao?.toLowerCase() === "admin") {
            return <DashboardAdmin />
        } else if (funcao?.toLowerCase() === "gerente") {
            return <DashboardGerente />
        } else if (funcao?.toLowerCase() === "tecnico") {
            return <DashboardTecnico />
        }
    }
    return (
        <div>
            <header>
                <h1>Bem-Vindo</h1>
                <button onClick={handleLogout}>Logout</button>
            </header>
            <main>
                {renderDashboard()}
            </main>
        </div>
    )
}

