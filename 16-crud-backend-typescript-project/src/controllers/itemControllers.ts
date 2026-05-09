import { Request, Response, NextFunction } from "express"

import { items } from "../models/items"

//! create add item
//? next : -> error ar janno function
export const createItem = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, description } = req.body;

        const newItem = {
            id: Date.now(),
            name: name,
            description: description
        }

        items.push(newItem)
        res.status(200).json(newItem)
    } catch (error) {
        next(error)
    }
}

//! add data show method
export const getItem = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json(items)
    } catch (error) {
        next(error)
    }
}



//! single data show by id 
export const getItemById = (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id, 10);

        //! items -> models thaka import name
        const item = items.find((item) => item.id === id)

        if (!item) {
            res.status(404).json({ message: "Item not found" })
            return;
        }

        res.json(item)

    } catch (error) {
        next(error)
    }
}

//! update item by id 
export const updateItem = (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id, 10);
        const { name, description } = req.body

        const itemIndex = items.findIndex((i) => i.id === id);
        if (itemIndex === -1) {
            res.status(404).json({ message: "item not found" })
            return;
        }
        items[itemIndex].name = name;
        items[itemIndex].description = description;

        res.json(items[itemIndex])
    } catch (error) {
        next(error)
    }
}

//! delete item by id 
export  const deleteItem = (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);

        const itemIndex = items.findIndex((i) => i.id === id);
        if (itemIndex === -1) {
            res.status(404).json({ message: "Item not found" })
            return ;
        }

        //* splice -> array man o kolay dey
        const deleteItem = items.splice(itemIndex,1)[0]
         res.json({message:"Item delete successfully", deleteItem})
    } catch (error) {
        next(error)
    }
}