import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Menu, Segment, Item } from "semantic-ui-react";
import SearchBar from "./videos/searchbar";
import { Switch, Route } from "react-router-dom";
import ProfilePic from "../pics/profile.JPG";

class Profile extends Component {
  state = { activeItem: "bio" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    let content = "";
    if (activeItem == "History") {
      content = <h1>This is bio</h1>;
    } else if (activeItem == "Experiences") {
      content = "Experiences";
    } else if (activeItem == "Performances") {
      content = "This is Performances";
    } else {
      content = "This is link";
    }
    //ถ้า activeItem เป็นค่าอะไร ให้แสดง content ของค่านั้น
    // content สามารถเป็น JSX ได้
    return (
      <div className="ui container" style={{marginTop:'2vw'}}>
        <Grid columns={3} divided relaxed stackable>
          <Grid.Column>
            <Item>
              <Item.Image size='massive' src={ProfilePic} />
            </Item>
          </Grid.Column>
          <Grid.Column width={3}>
            <Menu fluid vertical tabular>
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

          <Grid.Column stretched width={7}>
            <Segment content={content} />
          </Grid.Column>
        </Grid>
        <Switch>
          <Route exact path="/searchbar" component={SearchBar} />
        </Switch>
      </div>
    );
  }
}

export default Profile;
