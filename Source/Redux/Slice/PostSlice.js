import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    personDetails :[{

    }]
}
const PostSlice = createSlice({
    name:'Person',
    initialState,
    reducers:{
        personDetailsAdded :(state,action)=>{
            
        console.log("ActionPayload",action.payload);
        
       // state.personDetails.push(action.payload)
       state.personDetails = action.payload;

        }
    }

})

export  const {personDetailsAdded} = PostSlice.actions
export default PostSlice.reducer;