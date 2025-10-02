import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import LogoutButton from "../componentes/LogoutButton";
import DashboardTecnico from "../componentes/dashboards/DashboardTecnico";
import DashboardGerente from "../componentes/dashboards/DashboardGerente";
import DashboardAdmin from "../componentes/dashboards/DashboardAdmin";

export default async function DashboardPage() {
    const session = await getServerSession(authOptions)
    if (!session) {
        redirect("/login")
    }

    const renderDashboard = () =>{
        switch (session.user?.role) {
            case "admin":
                return <DashboardAdmin/>
                break;
            case "gerente":
                return <DashboardGerente/>
                break
            case "tecnico":
                return <DashboardTecnico/>
            default:
                <p>Tipo de Usuário desconhecido, Contate o Administrador</p>
                break;
        }
    }
    return(
        <div>
            <header>
                <h1>Bem-Vindo, {session.user?.name}</h1>
                <LogoutButton />
            </header>
            <main>
                {renderDashboard()}
            </main>
        </div>
    )
}