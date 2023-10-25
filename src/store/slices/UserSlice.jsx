import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUsers(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    deleteUsers(state, action) {
      console.log("delete all plz");
      return [];
    },
  },
});
export { userSlice };
export const { addUsers, removeUser, deleteUsers } = userSlice.actions;
