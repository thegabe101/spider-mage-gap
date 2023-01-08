import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import InfoIcon from "@mui/icons-material/Info";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

const Footer = (props) => {
	const [value, setValue] = useState(0);

	const handleChange = (_e, newValue) => {
		setValue(newValue);
	};

	return (
		<BottomNavigation
			showLabels
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
		>
			<BottomNavigationAction label="GitHub" icon={<GitHubIcon />} />
			<BottomNavigationAction label="About" icon={<InfoIcon />} />
			<BottomNavigationAction
				label="Contact"
				icon={<ConnectWithoutContactIcon />}
			/>
		</BottomNavigation>
	);
};

export default Footer;
