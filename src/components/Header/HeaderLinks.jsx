/* eslint-disable */
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";
import Tooltip from "material-ui/Tooltip";
import Icon from 'material-ui/Icon';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import InboxIcon from '@material-ui/icons/Inbox';

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";
import gitIcon from 'assets/img/icons/github-circle.svg';
import resume from './Resume.pdf'

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          buttonText="Resources"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <div className={classes.dropdownLink} onClick={() => window.open('https://github.com/MediaByte?tab=repositories')}>
              GitHub
            </div>,            
            <div 
              onClick={() => window.open(resume)}
              className={classes.dropdownLink}
            >
              Resume
            </div>,
          ]}
        />
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
