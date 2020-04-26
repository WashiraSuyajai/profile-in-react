import React, { Component } from "react";
import { Grid, Menu, Segment, Item } from "semantic-ui-react";
import SearchBar from "./videos/searchbar";
import { Switch, Route } from "react-router-dom";
import ProfilePic from "../pics/profile.JPG";
import Bio from "./my-info/bio";
import History from "./my-info/history";
import Performances from "./my-info/performances";
import Experiences from "./my-info/experiences";
import Link from "./my-info/link";
import { Image } from "react-bootstrap";
import Sake from "./cover-pics/sake.jpg";

class Profile extends Component {
  state = { activeItem: "Bio" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    let content = "";
    if (activeItem == "Bio") {
      content = <Bio />;
    } else if (activeItem == "History") {
      content = <History />;
    } else if (activeItem == "Experiences") {
      content = <Experiences />;
    } else if (activeItem == "Performances") {
      content = <Performances />;
    } else {
      content = <Link />;
    }
    //ถ้า activeItem เป็นค่าอะไร ให้แสดง content ของค่านั้น
    // content สามารถเป็น JSX ได้
    return (
      <div>
        <div>
          <Image src={Sake} style={{ width: "100vw", height: "400px" }} />
        </div>
        <div
          className="ui container"
          style={{ marginTop: "5vw", marginBottom: "5vw" }}
        >
          <h1 style={{ fontFamily: "chivo" }}>My Info</h1>
          <Grid
            columns={3}
            divided
            relaxed
            stackable
            style={{ marginTop: "2vw" }}
          >
            <Grid.Column>
              <Item>
                <Item.Image size="massive" src={ProfilePic} />
              </Item>
            </Grid.Column>
            <Grid.Column width={3}>
              <Menu fluid vertical tabular>
                <Menu.Item
                  name="Bio"
                  active={activeItem === "Bio"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="History"
                  active={activeItem === "History"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="Experiences"
                  active={activeItem === "Experiences"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="Performances"
                  active={activeItem === "Performances"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="Link"
                  active={activeItem === "Link"}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </Grid.Column>
            {/* Details */}
            <Grid.Column stretched width={7}>
              <Segment content={content} />
            </Grid.Column>
          </Grid>
          <Switch>
            <Route exact path="/searchbar" component={SearchBar} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Profile;
