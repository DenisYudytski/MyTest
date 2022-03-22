import { createSlice } from "@reduxjs/toolkit";
import { views } from "../../MOK/views";


const viewsSlice = createSlice({
	name: "views",
	initialState: {
		views: JSON.parse(localStorage.getItem('views')) ?? views
	},
	reducers: {
		addView: (state, action) => {
			state.views.push(action.payload)
			localStorage.setItem('views', JSON.stringify(state.views))
		}
	}
})

export const { addView } = viewsSlice.actions
export default viewsSlice.reducer