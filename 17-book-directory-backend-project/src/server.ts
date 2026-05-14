import mongoose from "mongoose";
import app from "./app";
import { config } from "./app/config";


const PORT = parseInt(config.port)


async function main(){
     await mongoose.connect(config.db_url as string)

    app.listen(PORT,()=>{
     console.log(`Example app listening on port ${PORT}`)
})

}

main().then(()=>console.log("MongoBD connected successfully")
).catch((error) => console.log(error))



