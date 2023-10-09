import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/user/user";
import { generateMockUser } from "../../mock/user-repo";
import { toast } from "react-toastify";
import { RootState } from "../store";

interface UserState {
    value: User | null;
}

const initialState: UserState = {
    value: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        populate: (state: UserState) => {
            if(!state.value){
                state.value = generateMockUser();
            }else{
                toast.error("Populate failed. User already populated!");
            }
        },
        set: (state: UserState, action: PayloadAction<User>) => {
            state.value = action.payload;
        },
        clear: (state: UserState) => {
            if(state.value){
                state.value = null;
            }else{
                toast.error("Clear failed. No user is currently set!");
            }
        },
        update: (state: UserState, action: PayloadAction<Partial<User>>) => {
            if(state.value){
                state.value = {...state.value, ...action.payload};
            }else{
                toast.error("Update failed. No user is currently set!");
            }
        },
    },
});

export const selectUser = (state: RootState) => state.user.value;

export const { set, clear, populate } = userSlice.actions;
export default userSlice.reducer;