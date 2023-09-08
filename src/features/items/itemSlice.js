import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../core/data";

const initialState = {
	data,
	selectedData: [],
};

export const itemSlice = createSlice({
	name: "items",
	initialState,
	reducers: {
		addItem: (state, action) => {
			const [selectedItems, leftItems] = action.payload;
			state.data = leftItems;
			selectedItems.map((item) => state.selectedData.push(item));
		},
		deleteItem: (state, action) => {
			const [selectedItems, leftItems] = action.payload;
			selectedItems.map((item) => state.data.push(item)).toSorted((a, b) => a.uniqueId - b.uniqueId);
			state.selectedData = leftItems;
		},
	},
});

export const selectAllItems = (state) => state.items.data;
export const selectedItems = (state) => state.items.selectedData;

export const { addItem, deleteItem } = itemSlice.actions;

export default itemSlice.reducer;
