import { createSlice } from '@reduxjs/toolkit';
import {RootState} from "./index";

export interface ThemeState {
	theme: string;
}

const initialState: ThemeState = {
	theme: localStorage.getItem('globalTheme') || 'light'
}

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		themeToggle: (state) => {
			state.theme = state.theme === 'light' ? 'dark' : 'light';
			localStorage.setItem('globalTheme', state.theme);
		}
	},
})

export const {themeToggle} = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
