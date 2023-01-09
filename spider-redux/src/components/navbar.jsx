import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import "../styles/navbar.css";
// import { createTheme } from "@mui/material/styles";
// import { light } from "@mui/material/styles/createPalette";

// const theme = createTheme({
// 	palette: {
// 		primary: light,
// 	},
// });

const NavBar = (props) => {
	const [value, setValue] = useState(0);

	const handleChange = (_e, newValue) => {
		setValue(newValue);
	};

	return (
		<React.Fragment>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar className="navContainer">
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="Navigation"
						indicatorColor="secondary"
						textColor="primary.light"
					>
						<Tab label="Home" index={0} component={Link} to={"/"} />
						<Tab
							label="Mages"
							index={1}
							component={Link}
							to={"/mage"}
						/>
						<Tab
							label="Battles"
							index={1}
							component={Link}
							to={"/battle"}
						/>
						<Tab
							label="Posts"
							index={1}
							component={Link}
							to={"/posts"}
						/>
					</Tabs>
				</AppBar>
			</Box>
		</React.Fragment>
	);
};

export default NavBar;
