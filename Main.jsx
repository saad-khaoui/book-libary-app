import React  from 'react'
import { useState } from 'react'
import Cards from './Cards/Cards'
import axios from 'axios'
const Main = () => {
  const [search ,setsearch] = useState("")
  const [bookData ,setData] = useState([''])
  const keypressed = (e) =>{
    if(e.key === "Enter"){
      axios.get('https://www.googleapis.com/books/v1/volumes?q=&key=AIzaSyD-UHzZFZ_qlrVnK7f10JBF4DyByFHahgo')
      .then(res =>setData(res.data.items))
      .catch(err => console.log(err))
    }
  }
  
  return (
    <>
    <div className="header">
      <div className="row1">
        <h1>A room without a <span>book</span> is like <br /> a body without a <span>soul</span> .</h1>
      </div>

      <div className="row2">
        <h2>find your book</h2>
        <input type="text" value={search} placeholder='Enter your book here' onChange={e =>setsearch(e.target.value)} onKeyDown={keypressed} />
        <button><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </div>
  
      <div className="container">
    {
      <Cards book={bookData} search/>
      
      }
    </div>
    </>
  )
  
}

export default Main