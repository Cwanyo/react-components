import React, { Component } from "react";
import { connect } from "react-redux";

import { PlayGroundContainer } from "./play-ground.style";

// import Card from "./card/card";
// import { CardBoard } from "./ui";

import {
  CardBoard,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardRemove
} from "./ui";

export class PlayGround extends Component {
  state = {
    Cards: []
  };

  componentDidMount() {
    let Cards = [];
    for (let index = 0; index < 2; index++) {
      Cards.push({ id: index, title: index.toString() });
    }

    this.setState({
      Cards: Cards
    });
  }

  handleUpdate = () => {
    let Cards = this.state.Cards.map(card => {
      if (card.id % 100) {
        return card;
      }
      return { id: card.id, title: card.title + card.title };
    });

    this.setState({
      Cards: Cards
    });
  };

  handleCardRemove = id => {
    let Cards = this.state.Cards.filter(card => card.id !== id);

    this.setState({
      Cards: Cards
    });
  };

  generateElements() {
    return this.state.Cards.map(card => {
      return (
        <Card key={card.id} id={card.id}>
          <CardRemove onRemove={() => this.handleCardRemove(card.id)} />
          <CardImg />
          <CardBody>
            <CardTitle>Title - {card.title}</CardTitle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              delectus doloribus aperiam, ducimus voluptates qui nam animi
              necessitatibus quibusdam nesciunt nulla reprehenderit cupiditate
              assumenda voluptatibus molestias possimus vel. Facilis, iure.
            </p>
          </CardBody>
        </Card>
      );
    });
  }

  render() {
    return (
      <PlayGroundContainer>
        <button type="button" onClick={this.handleUpdate}>
          Update
        </button>
        <CardBoard>{this.generateElements()}</CardBoard>
      </PlayGroundContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    size: state.UI.ResizableContainer
  };
};

export default connect(mapStateToProps)(PlayGround);
