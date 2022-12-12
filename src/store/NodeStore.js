import { createSlice } from "@reduxjs/toolkit";

const initialNodeState = {
	initial: true,
	nodeList: [],
};

// id: "",
// type: "",
// targetPosition: "",
// position: { x: null, y: null },
// data: { label: "" },
// key: "",
// style: {},
// className: "",
// targetPosition: "",
// sourcePosition: "",
// hidden: false,
// selected: false,
// dragging: false,
// draggable: true,
// selectable: true,
// connectable: true,
// deletable: true,
// focusable: true,
// dragHandle: "",
// width: null,
// height: null,
// parentNode: "",
// zIndex: 1,
// extent: "parent",
// expandParent: false,
// positionAbsolute: { x: null, y: null },
// ariaLabel: "",

const NodeSlice = createSlice({
	name: "Node",
	initialState: initialNodeState,
	reducers: {
		addNode(state, action) {
			return {
				nodeList: [...state.nodeList, action.payload],
				initial: false,
			};
		},

		removeNode(state, action) {
			const newNodes = state.nodeList.filter(
				(node) => node.key !== action.payload
			);
			const initial = nodeList.length === 0;
			return { nodeList: [...newNodes], initial };
		},

		changeType(state, action) {
			const changeNodes = state.nodeList.map((node) =>
				node.id === action.payload ? { ...node, type: "default" } : node
			);
			return { nodeList: [...changeNodes], initial: state.initial };
		},
	},
});

export const nodeActions = NodeSlice.actions;
export const nodeReducers = NodeSlice.reducer;
