import  React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
const NavBar = props => {
  const [value, setValue] = useState(0);

  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };


  return (
    <React.Fragment>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" color="transparent" style={{ position: "fixed", top: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Home" index={0} component={Link} to={"/"} />
        <Tab label="Mages" index={1} component={Link} to={"/mage"} />
        <Tab label="Battles" index={1} component={Link} to={"/battle"} />
      </Tabs>
    </AppBar>
    </Box>
    </React.Fragment>

  );

};

export default NavBar;