import React from "react";
// material-ui components
import withStyles from "material-ui/styles/withStyles";

// @material-ui/icons
import Code from "@material-ui/icons/Code";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Web from "@material-ui/icons/Web";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>#LetsTalkDev</h2>
            <h5 className={classes.description}>
              I'm a Javascript developer with tons of experience using 
              the latest standards.  I've contributed to a few open source 
              projects on npm and have worked on many projects small and 
              large, offering flawless development logic with my stack.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Back End"
                description="Advance experience in Node/Express and managing relational databases and enjoy working with all sorts of different data types like JSON & XML."
                icon={Code}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="ES8 Ready"
                description="I am able to deploy web and mobile applications using the latest ES6, ES7 & ES8 standards, offering abundant creativity with this area of expertise."
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Front End"
                description="I love working with React on front end projects, and using Redux, React-Router, Material-UI, react-strap, AntD & JSS really compliment my work."
                icon={Web}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
