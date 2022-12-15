import { createSlice } from "@reduxjs/toolkit";

const initialNodeState = {
	initial: true,
	nodeList: [],
	selected: null,
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
				selected: null,
			};
		},

		removeNode(state, action) {
			const newNodes = state.nodeList.filter(
				(node) => node.id !== action.payload
			);
			const initial = newNodes.length === 0;
			return { nodeList: [...newNodes], initial, selected: null };
		},

		changeType(state, action) {
			const changeNodes = state.nodeList.map((node) =>
				node.id === action.payload.id
					? { ...node, type: action.payload.type }
					: node
			);
			return {
				nodeList: [...changeNodes],
				initial: state.initial,
				selected: null,
			};
		},

		updateSelectedNode(state, { payload }) {
			if (payload.type === "add") {
				console.log(payload);
				const selectedNode = state.nodeList.find(
					(node) => node.id === payload.id
				);
				return { ...state, selected: selectedNode };
			}

			return { ...state, selected: null };
		},
	},
});

export const nodeActions = NodeSlice.actions;
export const nodeReducers = NodeSlice.reducer;
