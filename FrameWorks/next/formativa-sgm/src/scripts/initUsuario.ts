//script para a criacao de um usuario admin para o site

import Usuario from "@/models/Usuario"
import connectMongo from "@/services/mongodb"

export const criarAdmin = async () => {
    await connectMongo()
    const adminEmail = "admin@admin.com"
    //verificar se o admin ja existe
    const adminExiste = await Usuario.findOne({email: adminEmail})
    if (!adminExiste) {
        const admin = new Usuario({
            nome: "Administrador",
            email: adminEmail,
            senha: "123456",
            funcao: "admin"
        })
        await admin.save();
        console.log("Usuário admin criado com sucesso");
    }
    else{
        console.log("Usuário já existe");
    }
}

criarAdmin().catch(console.error);