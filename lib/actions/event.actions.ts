'use server'

import { revalidatePath } from 'next/cache'


import { handleError } from '@/lib/utils'

import {
  CreateEventParams,
  UpdateEventParams,
  DeleteEventParams,
  GetAllEventsParams,
  GetEventsByUserParams,
  GetRelatedEventsByCategoryParams,
} from '@/types'


// const getCategoryByName = async (name: string) => {
//   return Category.findOne({ name: { $regex: name, $options: 'i' } })
// }

// const populateEvent = (query: any) => {
//   return query
//     .populate({ path: 'organizer', model: User, select: '_id firstName lastName' })
//     .populate({ path: 'category', model: Category, select: '_id name' })
// }

// CREATE
export async function createEvent({ userId, event, path }: CreateEventParams) {
  try {
   

    const organizer = "xyz"
    if (!organizer) throw new Error('Organizer not found')

    // const newEvent = await Event.create({ ...event, category: event.categoryId, organizer: userId })
    revalidatePath(path)

    // return JSON.parse(JSON.stringify(newEvent))
    return organizer
  } catch (error) {
    handleError(error)
  }
}

// GET ONE EVENT BY ID
export async function getEventById(eventId: string) {
  try {

    const event = {name: "test", description: "test", price: "test", isFree: true, imageUrl: "test", location: "test", startDateTime: new Date(), endDateTime: new Date(), url: "test", organizer: {_id: "test", firstName: "test", lastName: "test"}, category: {_id: "test", name: "test"}}

    if (!event) throw new Error('Event not found')

    return event;
  } catch (error) {
    handleError(error)
  }
}

// UPDATE
export async function updateEvent({ userId, event, path }: UpdateEventParams) {
  try {
  

    const eventToUpdate = "xyz"
    // if (!eventToUpdate || eventToUpdate.organizer.toHexString() !== userId) {
    //   throw new Error('Unauthorized or event not found')
    // }

    // const updatedEvent = await Event.findByIdAndUpdate(
    //   event._id,
    //   { ...event, category: event.categoryId },
    //   { new: true }
    // )
    // revalidatePath(path)

    return JSON.parse(JSON.stringify("xyz"))
  } catch (error) {
    handleError(error)
  }
}

// DELETE
export async function deleteEvent({ eventId, path }: DeleteEventParams) {
  try {

    const deletedEvent = "xyz"
    if (deletedEvent) revalidatePath(path)
  } catch (error) {
    handleError(error)
  }
}

// GET ALL EVENTS
export async function getAllEvents({ query, limit = 6, page, category }: GetAllEventsParams) {
  try {

    return {
      data: JSON.parse(JSON.stringify(["xyz", "two"])),
      totalPages: 2,
    }
  } catch (error) {
    handleError(error)
  }
}

// GET EVENTS BY ORGANIZER
export async function getEventsByUser({ userId, limit = 6, page }: GetEventsByUserParams) {
  try {

    const events = ["xyz", "two"]

    return { data: JSON.parse(JSON.stringify(events)), totalPages: 2 }
  } catch (error) {
    handleError(error)
  }
}

// GET RELATED EVENTS: EVENTS WITH SAME CATEGORY
export async function getRelatedEventsByCategory({
  categoryId,
  eventId,
  limit = 3,
  page = 1,
}: GetRelatedEventsByCategoryParams) {
  try {
    const events = ["xyz", "two"]

    return { data: JSON.parse(JSON.stringify(events)), totalPages: 2 }
  } catch (error) {
    handleError(error)
  }
}