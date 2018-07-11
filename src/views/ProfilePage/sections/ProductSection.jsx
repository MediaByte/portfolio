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
              I am currently working on projects that focus on frontend and backend development. My passion
              is developing mobile apps and web applications for companies using a combination of the latest
              javascript frameworks including: Node, postgreSQL, React, React Native, Redux, Electron, HTML5, CSS3, AJAX,
              JSON, XML, REST, GIT.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Back End"
                description="Advance experience in Node/Express and managing relational databases and enjoy working with all sorts of different data types."
                icon={Code}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="ES8 Ready"
                description="I am able to deploy web and mobile applications using the latest ES8 standards, offering abundant creativity with in area of expertise."
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
