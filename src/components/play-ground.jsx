import React, { Component } from "react";
import { connect } from "react-redux";

import { PlayGroundContainer } from "./play-ground.style";

import {
  CardBoard,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardRemove
} from "./ui";

// for counting number of functions
const functions = new Set();

export class PlayGround extends Component {
  state = {
    Cards: []
  };

  componentDidMount() {
    let Cards = [];
    for (let index = 0; index < 1000; index++) {
      Cards.push({ id: index, title: index.toString() });
    }

    this.setState(
      {
        Cards: Cards
      },
      console.warn("cards generated")
    );
  }

  handleUpdate = () => {
    // random update on any card id that can % 100
    let Cards = this.state.Cards.map(card => {
      if (card.id % 100) {
        return card;
      }
      return { id: card.id, title: `${card.title}+` };
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

  handleFun = id => {
    console.log(id);
  };

  generateElements() {
    console.warn("generating elements");
    functions.add(this.handleCardRemove);
    functions.add(this.handleFun);

    return this.state.Cards.map(card => {
      return (
        <Card key={card.id}>
          <CardRemove onRemove={() => this.handleCardRemove(card.id)} />
          <CardImg />
          <CardBody>
            <CardTitle>
              Title{card.id} - {card.title}
            </CardTitle>
            <p onClick={() => this.handleFun(card.id)}>
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
        created funcs - {functions.size}
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
