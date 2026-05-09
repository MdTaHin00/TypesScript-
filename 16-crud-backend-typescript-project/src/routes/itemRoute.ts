import {Router} from 'express'
import {getItem} from '../controllers/itemControllers';
import {createItem} from '../controllers/itemControllers';
import {getItemById,updateItem,deleteItem} from '../controllers/itemControllers';

const router = Router();

//? createItem route
router.post("/",createItem)

//? all data show route 
router.get("/",getItem)

//? single data show by id 
router.get("/:id",getItemById)

//? update item by id 
router.put("/:id", updateItem)

//? delete item by id 
router.delete("/:id", deleteItem)

export default router 