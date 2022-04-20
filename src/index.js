import React from "react";
import ReactDOM from "react-dom";
import CommentCompnent from "./CommentComponent.js";
import faker from "@faker-js/faker";
import CardComponent from "./CardCompnent.js";
// const App = function () {
//   const text = "ismni kiriting";
//   const styleForm = { color: "red", backgroundColor: "yellow" };
//   return (
//     <div>
//       <label htmlFor="name">{text}</label>
//       <input type= "text" id="name" />
//       <button style={styleForm}>Send</button>
//     </div>
//   );
// };
// ReactDOM.render(<App />, document.querySelector("#root"));

function kun() {
  const date = new Date();
  const yil = date.getFullYear();
  const kun = date.getDate();
  const oy = date.getMonth();
  const soat = date.getHours();
  const minut = date.getMinutes();
  const sekund = date.getSeconds();
  return { yil, kun, oy, soat, minut, sekund };
}
const App = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <CardComponent>
        <CommentCompnent
          name={faker.name.firstName()}
          img={faker.image.avatar()}
          coment={faker.lorem.paragraph()}
        />
      </CardComponent>
      <CardComponent>
        <CommentCompnent
          name={faker.name.firstName()}
          img={faker.image.avatar()}
          coment={faker.lorem.paragraph()}
        />
      </CardComponent>
      <CardComponent>
        <CommentCompnent
          name={faker.name.firstName()}
          img={faker.image.avatar()}
          coment={faker.lorem.paragraph()}
        />
      </CardComponent>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
