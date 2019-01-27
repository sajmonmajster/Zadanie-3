import React from 'react'
import ReactDOM from 'react-dom';
import Komponent from '../components/reactx'
import '../stylesheet/index.css'


  const Komponent = () => (
    <div className="klasa">
      <button className="button" onClick={Wyswietl}>kolor1</button>
      <button className="button" onClick={Wyswietl}>kolor2</button>
      <button className="button" onClick={Wyswietl}>kolor3</button>
      <button className="button" onClick={Wyswietl}>kolor4</button>
      <button className="button" onClick={Wyswietl}>kolor5</button>
    </div>

  function Wyswietl() {
    return (
        ReactDOM.render(<Komponent />, document.getElementById("container-item"))
    );
  }

export default Functionx