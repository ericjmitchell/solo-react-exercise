import { configureStore } from '@reduxjs/toolkit'
import peopleReducer from './people/peopleSlice'
import personReducer from './people/personSlice'

export default configureStore({
  reducer: {
    people: peopleReducer,
    person: personReducer
  }
})