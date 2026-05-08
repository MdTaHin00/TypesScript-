import {Router} from 'express'
import {getItem} from '../controllers/itemControllers';
import {createItem} from '../controllers/itemControllers';
import {getItemById} from '../controllers/itemControllers';

const router = Router();

//? createItem route
router.post("/",createItem)

//? all data show route 
router.get("/",getItem)

//? single data show by id 
router.get("/:id",getItemById)

export default router 