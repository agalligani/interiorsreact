import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/ajax-loader.gif";

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
      { url: "/src/assets/images/pic10.57.png", alt: "pic 2" },
      { url: "/src/assets/images/pic11.15.png", alt: "pic 3" },
      { url: "/src/assets/images/pic11.26.png", alt: "pic 4" },
      { url: "/src/assets/images/pic11.40.png", alt: "pic 5" },
      { url: "/src/assets/images/pic10.57.png", alt: "pic 2" },
      { url: "/src/assets/images/pic11.15.png", alt: "pic 3" },
      { url: "/src/assets/images/pic11.26.png", alt: "pic 4" }
    ]
  };

  _hydrateCarousel = () => {
    let pics = this.state.images.map((pic, i) => {
      return (
        <div key={i} className="item">
          <img src={pic.url} alt={pic.alt} />
          <h4>{i}</h4>
        </div>
      );
    });
    return pics;
  };

  render() {
    return (
      <OwlCarousel className="owl-theme" loop margin={10} nav>
        {this._hydrateCarousel()}
      </OwlCarousel>
    );
  }
}
