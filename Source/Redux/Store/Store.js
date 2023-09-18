import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../Slice/CounterSlice";
import PostSlice from "../Slice/PostSlice";
export default configureStore({
    reducer: {

        counter: CounterSlice,
        Person : PostSlice
    },
})