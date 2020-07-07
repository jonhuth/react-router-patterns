import React from 'react';
import { NavLink } from "react-router-dom";

function Colors({ colors }) {
  return (
    <div>
      <h1>Welcome to the color factory.</h1>
      <NavLink exact to="/colors/new">Add a color</NavLink>
      <h3>Please select a color</h3>
      {colors.map(color => <div><NavLink exact to={`/colors/${color}`}>
        {color}
      </NavLink></div>)}
    </div>
  );
}

export default Colors;