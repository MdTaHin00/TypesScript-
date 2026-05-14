import app from "./app";
import { config } from "./app/config";


const PORT = parseInt(config.port)


app.listen(PORT,()=>{
     console.log(`Example app listening on port ${PORT}`)
})