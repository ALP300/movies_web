import pg from 'pg';
const {Client}= pg;

const config={
    user: movie_proy_user,
    host: dpg-ctce54tds78s739cogh0-a.oregon-postgres.render.com,
    database: movie_proy,
    password: FWOco4tAAZppTqzQzMDdH9hXI8AkPi0y,
    port: 5432,
    ssl:{
        rejectUnauthorized: false
    }
}

async function Conectar(params) {
    const cliente= new Client(config)
    try{
        await cliente.connect()
        console.log("Conectado a la base de datos")

    }catch{

    }
}