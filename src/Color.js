import React from 'react';
import { useParams, Redirect } from "react-router-dom";

function Color({ colors }) {
  const { color } = useParams();
  if (!colors.includes(color)) {
    return <Redirect exact to="/colors" />
  }

    return (
      <div style={{ backgroundColor: color }}>
        <h1>You are at the {color} page</h1>
      </div>
    )

}

export default Color;