import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from "../Reducer/userReducer"


const myStore = new configureStore({
    reducer:{
        users:userReducer
    }
})

export default myStore