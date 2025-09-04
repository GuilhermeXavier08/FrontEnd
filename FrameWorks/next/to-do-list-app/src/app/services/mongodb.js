//arrow function

import mongoose from "mongoose"

const connectMongo = async () => {
    mongoose.connect(process.env.DATABASE_URL) //estabelece conexão com o banco de dados
        .then(() => console.log("Conectado ao MongoDB"));
}

export default connectMongo;