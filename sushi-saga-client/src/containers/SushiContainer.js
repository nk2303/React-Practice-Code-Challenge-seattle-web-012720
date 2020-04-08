import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.list.map(sushi => <Sushi key={sushi.id} handleSelectedSushi={props.handleSelectedSushi} info={sushi} />)
          /* Render Sushi components here!*/
        }
        <MoreButton onClick={props.onButtonClick} />
      </div>
    </Fragment>
  )
}

export default SushiContainer