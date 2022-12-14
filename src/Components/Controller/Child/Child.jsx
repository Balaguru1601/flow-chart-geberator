import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { Remove as RemoveIcon, Add as AddIcon } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { nodeActions } from "../../store/NodeStore";

const Child = (props) => {
	const parent = props.parent;

	return <div>Child</div>;
};

export default Child;
