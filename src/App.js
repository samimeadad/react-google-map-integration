import { useRef, useState } from 'react';
import './App.css';
import Direction from './components/Direction/Direction';
import Map from './components/Map/Map';

function App () {
  const [ origin, setOrigin ] = useState( '' );
  const [ destination, setDestination ] = useState( '' );
  const originRef = useRef( '' );
  const destinationRef = useRef( '' );

  const handleDirection = e => {
    e.preventDefault();
    setOrigin( originRef.current.value );
    setDestination( destinationRef.current.value );
  }
  return (
    <div className="App">
      <form onSubmit={ handleDirection }>
        <input type="text" ref={ originRef } placeholder="Origin" />
        <br />
        <input type="text" ref={ destinationRef } placeholder="Destination" />
        <br />
        <input type="submit" value="Get Direction" />
      </form>
      <Map></Map>
      <Direction origin={ origin } destination={ destination }></Direction>
    </div>
  );
}

export default App;
