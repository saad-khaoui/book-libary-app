import React from 'react'

const Cards = ({book}) => {
    console.log(book)
    return (
        
        <>
            { book.map((element) =>{
            
            <div className="card">
                    <img src="./images/sin-eater.jpg" alt="" />
                    <div className="bottom">
                        <h2>{element}</h2>
                        <p className="price">
                            50$
                        </p>
            </div>
            </div>
            
            })
            
        }

        </>
        )
        
}

export default Cards
