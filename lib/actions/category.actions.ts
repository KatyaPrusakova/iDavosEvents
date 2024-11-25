'use server'

import {CreateCategoryParams} from "@/types"
import { handleError } from "../utils"



export const createCategory = async({categoryName}:CreateCategoryParams) =>{
    try{
        const newCategory =  ["test"] // graphql mutation
        return JSON.parse(JSON.stringify(newCategory))
    }
    catch(error){
        handleError(error)
    }
}

export const getAllCategories = async() =>{
    try{
    
        const categories = ["test", "two"] // graphql query
        return JSON.parse(JSON.stringify(categories))
    }
    catch(error){
        handleError(error)
    }
}