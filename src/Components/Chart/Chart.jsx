import { Box } from "@mui/material";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
import "reactflow/dist/style.css";
import classes from "./Chart.module.css";

const Chart = () => {
	return (
		<Box
			sx={{
				height: "100%",
			}}
		>
			<ReactFlow className={classes.reactFlow}>
				<Background />
				<Controls />
				<MiniMap />
			</ReactFlow>
		</Box>
	);
};

export default Chart;
