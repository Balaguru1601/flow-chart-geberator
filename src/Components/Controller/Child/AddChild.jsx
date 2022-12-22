import { IconButton, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { Remove as RemoveIcon, Add as AddIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { nodeActions } from "../../../store/NodeStore";

const nodeHeight = 44;

const AddChild = (props) => {
	const [noOfChild, setNoOfChild] = useState(0);
	const parent = useSelector((state) => state.node.selected);
	const dispatch = useDispatch();

	const changeNoOfChild = (type) => {
		type === 1
			? setNoOfChild((prev) => prev + 1)
			: setNoOfChild((prev) => (prev > 0 ? prev - 1 : prev));

		if (type === 1) {
			const nodeType = "default";

			return dispatch(
				nodeActions.addNode({
					id: `${parent.id}-${noOfChild}`,
					position: {
						x: parent.position.x + 100,
						y: nodeHeight * (noOfChild + (noOfChild + 1)),
					},
					type: nodeType,
					isParent: false,
					parent: parent.id,
					data: { label: `child ${noOfChild}` },
					width: 200,
					height: 1,
				})
			);
		}

		return dispatch(nodeActions.removeNode(noOfChild - 1));
	};

	console.log(parent);
	return (
		<Fragment>
			<Typography variant="h6">Parent : {parent.data.label}</Typography>
			<IconButton onClick={() => changeNoOfChild(-1)} size="small">
				<RemoveIcon />
			</IconButton>
			<Typography
				variant="h5"
				gutterBottom
				component="span"
				fontWeight={"bold"}
				px={1}
			>
				{noOfChild}
			</Typography>

			<IconButton onClick={() => changeNoOfChild(1)} size="small">
				<AddIcon />
			</IconButton>
		</Fragment>
	);
};

export default AddChild;
