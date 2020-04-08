import React, { Fragment } from 'react'

const Sushi = (props) => {
  const handleClick = () => {
    props.handleSelectedSushi(props.info);
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.info.isEaten ?
            null
          :
            <img src={props.info.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.info.name} - ${props.info.price}
      </h4>
    </div>
  )
}

export default Sushi