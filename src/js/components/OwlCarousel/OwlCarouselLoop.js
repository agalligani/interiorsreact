import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel2";
// import "react-owl-carousel2/style.css"; //Allows for server-side rendering.

const options = {
  items: 1,
  nav: true,
  rewind: true,
  autoplay: true
};

const events = {
  //   onDragged: event => {},
  //   onChanged: event => {}
};

export default class OwlCarouselLoop extends Component {
  state = {
    images: [
      { url: "/src/assets/images/pic10.29.png", alt: "pic 1" },
      { url: "/src/assets/images/pic10.49.png", alt: "pic 2" },
      { url: "/src/assets/images/pic10.57.png", alt: "pic 4" },
      { url: "/src/assets/images/pic11.15.png", alt: "pic 5" },
      { url: "/src/assets/images/pic11.26.png", alt: "pic 6" },
      { url: "/src/assets/images/pic11.40.png", alt: "pic 7" }
    ]
  };
  _hydrateCarousel = () => {
    let pics = this.state.images.map(pic => {
      return (
        <div>
          <img src={pic.url} alt={pic.alt} />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div ref="car" options={options} events={events}>
          {this._hydrateCarousel()}
        </div>
        <button onClick={() => this.refs.car.goTo(0)}>goTo</button>
        <button onClick={() => this.refs.car.prev()}>prev</button>
        <button onClick={() => this.refs.car.next()}>next</button>
      </div>
    );
  }
}
