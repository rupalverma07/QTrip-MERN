import React from 'react'

const Card = ({data}) => {
  return (
    <div className='col-6 col-lg-3 mb-4'>
      <a href="pages/adventures/?city=${data.id}" id={data.id}>
                        <div className="tile">
                         <img  src={data.image} alt={data.city} className="img-fluid" />  
                         <div className="tile-text text-center">
                            <h2>{data.city}</h2>
                             <p>{data.description}</p>
                    </div>
                    </div>

                  </a>
    </div>
  )
}

export default Card
