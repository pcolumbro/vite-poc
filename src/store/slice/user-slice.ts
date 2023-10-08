import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/user/user";
import { generateMockUser } from "../../mock/user-repo";

interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        populateUser: (state: UserState) => {
            setTimeout(() => {
                state.user = generateMockUser();
            }, 5000);
        },
        setUser: (state: UserState, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        clearUser: (state: UserState) => {
            state.user = null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export const getUser = (state: UserState) => state.user;

export default userSlice.reducer;