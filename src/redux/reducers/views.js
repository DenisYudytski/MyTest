import { createSlice } from "@reduxjs/toolkit";
import { views } from "../../MOK/views";


const viewsSlice = createSlice({
	name: "views",
	initialState: {
		views: JSON.parse(localStorage.getItem('views')) ?? views,
		status: "loading"
	},
	reducers: {
		addView: (state, action) => {
			state.views.push(action.payload)
			localStorage.setItem('views', JSON.stringify(state.views))
		},
		setStatus: (state, action) => {
			state.status = action.payload
		}
	}
})

export const { addView, setStatus } = viewsSlice.actions
export default viewsSlice.reducer