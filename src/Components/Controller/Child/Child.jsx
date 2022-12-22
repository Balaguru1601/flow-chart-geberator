import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { Remove as RemoveIcon, Add as AddIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { nodeActions } from "../../../store/NodeStore";
import AddChild from "./AddChild";

const Child = (props) => {
	const selected = useSelector((state) => state.node.selected);
	return <Box>{selected && <AddChild parent={parent} />}</Box>;
};

export default Child;
