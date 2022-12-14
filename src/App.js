import React, { Component, useState } from 'react';
import Helmet from 'react-helmet';
import {
  Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import history from './history';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider, createMuiTheme,} from '@material-ui/core/styles';
import AppContainerElem from './Components/AppContainerElem';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography
} from '@material-ui/core';
import Icon from './Icon.png';
import Logo from './Logo.png';
import BoltAnalysis from './Views/BoltAnalysis/BoltAnalysis';

const Menu = {
  MenuNavBar: [
    { text: "", link: "", href: "", icon: "" }
  ],
  MenuSideBarSup: [
    { text: "Home", link: "/home", href: "", icon: "dashboard" },
  ],
  MenuSideBarInf: [
   
    { text: "GitHub", link: "", href: "https://github.com/Igor-TriDyme/bolts-app.git", icon: "code" },
  ],

  
  MenuSideBarNotion: [
   
    { text: "Documentation", link: "", href: "https://www.notion.so/Documentation-Technique-685a1bd160bb44ca86e7fa782b75276e", icon: "code" },
  ],


};

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            // light: will be calculated from palette.primary.main,
            main: '#000000',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
          },
          secondary: {
            //light: '#0066ff',
            main: '#ff0000',
            // dark: will be calculated from palette.secondary.main,
            //contrastText: '#ffcc00',
          },
        },
        
      }),
    [prefersDarkMode],
  );

  return (
    <div>
        
      <ThemeProvider theme={theme}>
        <Helmet>
          <title>{`TriDyme | Applications`}</title>
          <link rel="icon" type="image/png" href={Logo} sizes="16x16" />
        </Helmet>
        <Router history={history}>
          <AppContainerElem
            title={<ListItem>
              <ListItemAvatar>
                <Avatar
                  alt={`TriDyme - BoltCalc app`}
                  src={Icon}
                />
              </ListItemAvatar>
              <ListItemText primary={`TriDyme - BoltCalc app`} />
            </ListItem>}
            menu={Menu}
          >
            <Switch>
              <Route exact path="/" component={BoltAnalysis} />
              <Route exact path="/home" component={BoltAnalysis} />
            </Switch>
          </AppContainerElem>
        </Router>
      </ThemeProvider>
   </div>
   
  );
  
};

export default App;
