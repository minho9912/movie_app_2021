import React from "react";

const foodLike = [
  {
    name: "chikin",
    image: "https://health.chosun.com/site/data/img_dir/2021/03/31/2021033102448_0.jpg",
  },
  {
    name: "ham",
    image: "https://imagesm.cj.net/images/brand/spam/img_cont1.png",
  },
];
function App() {
  return (
    <div className="App">
      <h1>Hello React!!!!</h1>
      {foodLike.map(renderFood)}
    </div>
  );
}
function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;
}
function Food({ name, picture }) {
  return (
    <div>
      <h3>I love {name}</h3>
      <img src={picture}></img>
    </div>
  );
}

export default App;
