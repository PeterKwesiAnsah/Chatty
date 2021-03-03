import {configureStore} from '@reduxjs/toolkit'
import messagesReducer from '../slices/messages'
import unReadReducer from '../slices/unRead'


const store =configureStore({   
    reducer:{
        messages:messagesReducer,
        unReadMessages:unReadReducer
    }
})

export default store