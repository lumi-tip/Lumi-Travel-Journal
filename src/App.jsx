import { useState } from 'react'
import Data from './data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

import './App.css'
let earth = <FontAwesomeIcon icon={faEarthAmericas} />
let locationDot = <FontAwesomeIcon icon={faLocationDot} style={{ color: "#e60f6c", }} />

let cardMap = Data.map((data, index) => {
  if (index !== Data.length - 1) {
    return (
      <>
        <Card id={data.id} data={data}/>
        <hr/>
      </>
    )
  }else return <Card id={data.id} data={data}/>
})

function Card(props) {

  return (
    <div className='card-wrapper'>
      <img src={props.data.imgURL} />
      <div>
        {locationDot}
        <p className="country">{(props.data.country).toUpperCase()}</p><a id="maps" href={props.data.maps} target='_blank'>View in google maps</a>
        <h2>{props.data.location}</h2>
        <span className="travel-date"><b>{props.data.date}</b></span>
        <p>{props.data.description}</p>
      </div>
    </div>
  )
}

function NavBar() {
  return (
    <nav>
      {earth}
      <h1>My Travel Journal</h1>
    </nav>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      {cardMap}
    </>
  )
}

export default App
