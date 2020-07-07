import React, {useState} from 'react';
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Color from './Color';
import AddColorForm from './AddColorForm';
import Colors from './Colors';
import './App.css';

function App() {
  const [colors, setColors] = useState(['red', 'green', 'blue']);

  const addColor = color => {
    setColors(prevColors => [...prevColors, color]);
    console.log(color);
    console.log('after: ', colors);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors/new">
            <AddColorForm addColor={addColor}/>
          </Route>
          <Route exact path="/colors/:color">
            <Color colors={colors}/>
          </Route>
          <Route exact path="/colors">
            <Colors colors={colors}/>
          </Route>
          <Redirect to="/colors" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
