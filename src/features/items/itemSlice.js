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
			// const idsToRemove = action.payload;
			// console.log(idsToRemove);
			// const select = state.data.filter(item => idsToRemove.includes(item.uniqueId))
			// console.log(select);
			// state.selectedItem.push(...state.data.filter(item => idsToRemove.includes(item.uniqueId)));
			// console.log(state.selectedData);
			// state.data = state.data.filter(item => !idsToRemove.includes(item.uniqueId));
			const [selectedItems, leftItems] = action.payload;
			state.data = leftItems;
			selectedItems
				.map((item) => state.selectedData.push(item))
				.sort((a, b) => a.uniqueId - b.uniqueId);
			console.log(state.selectedData);
		},
		deleteItem: (state, action) => {
			const [selectedItems, leftItems] = action.payload;
			selectedItems
				.map((item) => state.data.push(item))
				.sort((a, b) => a.uniqueId - b.uniqueId);
			console.log(state.data);
			state.selectedData = leftItems;
		},
	},
});

export const selectAllItems = (state) => state.items.data;
export const selectedItems = (state) => state.items.selectedData;

export const { addItem, deleteItem } = itemSlice.actions;

export default itemSlice.reducer;
