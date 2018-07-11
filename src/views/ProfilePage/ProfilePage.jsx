import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// @material-ui/icons
import SentimentSatisfied from "@material-ui/icons/SentimentSatisfied";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/mario.jpg";

import crgRecruit from "assets/img/examples/crg.jpg";
import studio2 from "assets/img/examples/crgWebsite.jpg";
import camGroup from "assets/img/examples/camGroup.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";

import ProductSection from './sections/ProductSection'

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {
  render() {
    let thisYear = new Date();
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="MediaByte"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
        />
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Mario Martin</h3>
                      <h6>
                        Full Stack Web Developer 
                      </h6>
                      <IconButton
                        color="transparent"
                        className={classes.margin5}
                        href="http://www.gitHub.com/MediaByte"
                      >
                        <i className={classes.socials + " fab fa-github"} />
                      </IconButton>
                      <IconButton
                        color="transparent"
                        className={classes.margin5}
                        href="https://www.linkedin.com/in/mediabyte/"
                      >
                        <i className={classes.socials + " fab fa-linkedin"} />
                      </IconButton>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  In a fast paced generation, the future of {thisYear.getFullYear()} is now! 
                   As an artist of considerable range, Mario Martin is a MIT-Cambridge local 
                  and a full stack web developer offering a blend of business logic and the latest
                  experience in Javascript engineering.
                </p>
              </div>
              <ProductSection />
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="danger"
                    tabs={[
                      {
                        tabButton: "Projects",
                        tabIcon: SentimentSatisfied,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={crgRecruit}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio2}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio5}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={camGroup}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
