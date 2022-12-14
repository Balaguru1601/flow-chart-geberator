import { Box } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import ReactFlow, {
	Controls,
	Background,
	MiniMap,
	useOnSelectionChange,
} from "reactflow";
import "reactflow/dist/style.css";
import classes from "./Chart.module.css";

const Chart = () => {
	const nodes = useSelector((state) => state.node.nodeList);

	return (
		<Box
			sx={{
				height: "100%",
			}}
		>
			<ReactFlow
				nodes={nodes}
				className={classes.reactFlow}
				onSelectionChange={(s) => console.log(s)}
			>
				<Background />
				<Controls />
				<MiniMap />
			</ReactFlow>
		</Box>
	);
};

export default Chart;
