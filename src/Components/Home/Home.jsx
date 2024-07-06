import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  let array = ["","","","","","","","","","","","","","",""]
  return (
    <div>
      {array.map((item ,index) =>
       <p>
        <Link to={`project${index+1}`}>Project {index+1}</Link>
       </p>
      )}
    </div>
  )
}

export default Home