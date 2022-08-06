import {configureStore} from "@reduxjs/toolkit"
import { acceptProductReducer, allUsersReducer, newVendorReducer, pendingProductReducer, updateUserReducer } from "./Reducer/AdminReducer"
import { approvedProductReducer, newProductReducer, productReducer } from "./Reducer/ProductReducer"
import { userReducer } from "./Reducer/UserReducer"



const store=configureStore({
    reducer:{
        user:userReducer,
        products:productReducer,
        addProduct:newProductReducer,
        newVendor:newVendorReducer,
        allUsers:allUsersReducer,
        pendingProducts:pendingProductReducer,
        productStatus:acceptProductReducer,
        approvedProducts:approvedProductReducer,
        updateUser:updateUserReducer,
    }
})

export default store