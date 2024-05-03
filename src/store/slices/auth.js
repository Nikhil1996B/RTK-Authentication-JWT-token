import { createSlice } from '@reduxjs/toolkit';
import { signOut, login, fetchUserData } from './authThunk';
const initialState = {
  token: null,
  loading: false,
  userData: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(signOut.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = {};
      state.token = null;
    });
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      const { accessToken, user } = action.payload;
      state.token = accessToken;
      state.userData = user;
      state.loading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(fetchUserData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      const { accessToken, user } = action.payload;
      state.token = accessToken;
      state.userData = user;
      state.loading = false;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.loading = false;
      state.userData = {};
      state.token = null;
    });
  },
});
export const {} = authSlice.actions;

export default authSlice.reducer;
