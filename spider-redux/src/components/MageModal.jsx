import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: "absolute",
		width: 400,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(4),
		outline: "none",
	},
}));

function MageModal() {
	const [open, setOpen] = useState(false);
	const [modalStyle] = useState(getModalStyle);
	const [modalData, setData] = useState();

	const data = [
		{
			title: "Mage Details",
			Info: "Mage info here",
		},
		{
			title: "Mage Details",
			Info: "Mage info here",
		},
		{
			title: "Mage Details",
			Info: "Mage info here",
		},
		{
			title: "Mage Details",
			Info: "Mage info here",
		},
	];
	const CustomModal = () => {
		return modalData ? (
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={open}
				onClose={handleClose}
			>
				<div style={modalStyle} className={classes.paper}>
					<Typography variant="h6" id="modal-title">
						{modalData.Info}
					</Typography>
					<Typography
						variant="subtitle1"
						id="simple-modal-description"
					>
						{modalData.title}
					</Typography>
					{/* <SimpleModal /> */}
				</div>
			</Modal>
		) : null;
	};

	const handleOpen = (index) => {
		setOpen(true);
		setData(data[index]);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const classes = useStyles();

	return (
		<div>
			{data.map((d, index) => (
				<div>
					<Button
						onClick={() => {
							handleOpen(index);
						}}
					>
						{d.title}
					</Button>
				</div>
			))}
			<CustomModal />
		</div>
	);
}

export default MageModal;
