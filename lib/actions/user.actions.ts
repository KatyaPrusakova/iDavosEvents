'use server'
 
// import { revalidatePath } from 'next/cache' // needs after delete user


import { handleError } from '@/lib/utils'

import { CreateUserParams } from '@/types'

export async function createUser(user: CreateUserParams) {
  try {
  
    return "JSON.parse(JSON.stringify(newUser))"
  } catch (error) {
    handleError(error)
  }
}



