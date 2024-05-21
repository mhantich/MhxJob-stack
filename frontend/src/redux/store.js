import {configureStore} from '@reduxjs/toolkit'
import authSlice from './auth/AuthSlice.js'
import Card from './Card.js'
import JobSlice from './Jobs/JobSlice.js'
import offeresSlice from './offerce/offeresSlice.js'
import CatiSlice from './cati/CatiSlice.js'
import BookingSlice from './booking/BookingSlice.js'


export const store=configureStore({
    reducer:{
        authSlice,
        Card,
        JobSlice,
        offeresSlice,
        CatiSlice,
        BookingSlice

    }
})
