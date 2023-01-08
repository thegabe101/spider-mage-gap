import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import "../styles/navbar.css";
// import fantback1 from "../assets/fantback1";
// import fantback2 from "../assets/fantback2";
// import fantback3 from "../assets/fantback3";
// import fantback4 from "../assets/fantback4";
// import fantback5 from "../assets/fantback5";

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
						indicatorColor="primary"
						textColor="primary"
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
