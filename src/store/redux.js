import { configureStore } from "@reduxjs/toolkit";
import { nodeReducers } from "./NodeStore";

const store = configureStore({
	reducer: {
		node: nodeReducers,
	},
});

export default store;
