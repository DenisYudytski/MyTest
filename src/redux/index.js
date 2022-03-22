import { configureStore } from "@reduxjs/toolkit";
import viewsReducer from "./reducers/views";


export const store = configureStore({
	reducer: {
		views: viewsReducer

	}
})