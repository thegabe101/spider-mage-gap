import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useSelector, useDispatch } from "react-redux";
import { selectAllMages, fetchMages } from "./magesSlice";
// import PostsExcerpt from "./PostsExcerpt";
import { useState, useEffect } from "react";
import "../../styles/magelist.css";
import { Typography } from "@mui/material";
import { Button, CardActionArea, CardActions } from "@mui/material";
import dwarfmageplaceholder from "../../assets/dwarfmageplaceholder.jpg";
import DataTable from "react-data-table-component";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import SortIcon from "@mui/icons-material/ArrowDownward";

const MageList = () => {
	const dispatch = useDispatch();
	const mages = useSelector(selectAllMages);
	useEffect(() => {
		if (mages === undefined || mages.length == 0) {
			dispatch(fetchMages());
		}
	}, []);
	let content = [];
	if (mages.length != 0) {
		content = mages;
		console.log(content);
	}
	const columns = [
		{
			name: "Name",
			selector: "name",
			sortable: true,
		},
		{
			name: "Power",
			selector: "power",
			sortable: true,
		},
	];

	const isIndeterminate = (indeterminate) => indeterminate;
	const selectableRowsComponentProps = { indeterminate: isIndeterminate };

	return (
		<div>
			<div className="mageContainer">
				{content.map((mage) => (
					<Card className="mageCard">
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image={dwarfmageplaceholder}
								alt="green iguana"
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="div"
								>
									{mage.name}
								</Typography>
								<Typography
									variant="body2"
									color="text.secondary"
								>
									Mage info here...
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								Choose mage
							</Button>
						</CardActions>
					</Card>
					// <div className="indvMage">{mage.name} </div>
				))}
			</div>
			<div className="mageRow">
				{/* {content.map(mage => <div>{mage.name} </div>)}
            <div style={{ height: 400, width: '100%' }}> */}

				<Paper>
					<DataTable
						title="Mages"
						columns={columns}
						data={content}
						defaultSortField="name"
						sortIcon={<SortIcon />}
						pagination
						selectableRows
						selectableRowsComponent={Checkbox}
						selectableRowsComponentProps={
							selectableRowsComponentProps
						}
					/>
				</Paper>
			</div>
		</div>
	);
};

export default MageList;
