import dotenv from 'dotenv' 

dotenv.config() ;

export const config ={
    //! config port 
    port : process.env.PORT  || 4000 ,
    //! database url config 
    db_url : process.env.MONFOBD_URL 
}