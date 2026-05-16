import dotenv from 'dotenv' 

dotenv.config() ;

export const config ={
    //! config port 
    port : process.env.PORT  || 4000 ,
    //! database url config 
    db_url : process.env.MONFOBD_URL ,
    //! token secret 
    jwt_secret : process.env.JWT_SECRET 
}