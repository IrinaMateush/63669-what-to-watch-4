import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const init = () => {
  const settings = {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    year: 2014
  };

  ReactDOM.render(
      <App
        title={settings.title}
        genre={settings.genre}
        year={settings.year}
      />,
      document.querySelector(`#root`)
  );
};

init();
