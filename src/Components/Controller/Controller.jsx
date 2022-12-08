import { Box, IconButton, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { Remove as RemoveIcon, Add as AddIcon } from "@mui/icons-material";

const Controller = () => {
	const [noOfParents, setNoOfParents] = useState(0);

	const changeNoOfParents = (type) => {
		type === 1
			? setNoOfParents((prev) => prev + 1)
			: setNoOfParents((prev) => (prev > 0 ? prev - 1 : prev));
	};

	return (
		<Box>
			<Paper sx={{ padding: "2%" }}>
				<Typography variant="h3" gutterBottom>
					Controllers
				</Typography>
				<Box>
					<Typography
						variant="h5"
						gutterBottom
						component={"span"}
						pr="0.5rem"
					>
						Parent nodes
					</Typography>
					<IconButton
						onClick={() => changeNoOfParents(-1)}
						size="small"
					>
						<RemoveIcon />
					</IconButton>
					<Typography
						variant="h5"
						gutterBottom
						component="span"
						fontWeight={"bold"}
						px={1}
					>
						{noOfParents}
					</Typography>

					<IconButton
						onClick={() => changeNoOfParents(1)}
						size="small"
					>
						<AddIcon />
					</IconButton>
				</Box>
			</Paper>
		</Box>
	);
};

export default Controller;
