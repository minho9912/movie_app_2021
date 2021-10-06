import React from "react";
import PropTypes from "prop-types";
const foodLike = [
  {
    id: 1,
    name: "chikin",
    image: "https://health.chosun.com/site/data/img_dir/2021/03/31/2021033102448_0.jpg",
    alt: "치킨",
    rating: 4.3,
  },
  {
    id: 2,
    name: "ham",
    image: "https://imagesm.cj.net/images/brand/spam/img_cont1.png",
    alt: "햄",
    rating: 4.5,
  },
];
function App() {
  console.log(foodLike.map(renderFood));
  return (
    <div className="App">
      <h1>Hello React!!!!</h1>
      {foodLike.map(renderFood)}
    </div>
  );
}

const renderFood = dish => <Food key={dish.id} name={dish.name} picture={dish.image} alt={dish.alt} rating={dish.rating} />;

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function Food({ name, picture, alt, rating }) {
  return (
    <div>
      <h3>I love {name}</h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={alt}></img>
    </div>
  );
}

// export default App;
