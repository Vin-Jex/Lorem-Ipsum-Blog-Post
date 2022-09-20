// FETCH

import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import './App.css'


export default function ApiApp() {

  const [results, setResults] = useState([])

  useEffect(() => {
    fetchPost().then(response => setResults(response))
  }, [])

  const fetchPost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    console.log(response)

    return response
  }
  fetchPost()

  return (
    <div>
      <Cards results={results}/>
    </div>
  )
}


// JSON File
// import React from 'react'
// import Employees from './Employees.json'

// export default function ApiApp() {

//   const data = `{ 
//     "name": "Alex C",
//     "age": 20,
//     "city": "Houseton",
//     "marrried": false
//   }`

//   const stringObj = {
//     name: 'John Doe',
//     age:   25,
//     gender: 'Male'
//   }

//   const dataObj = JSON.parse(data)
//   console.log(dataObj);
//   const objString = JSON.stringify(stringObj)
//   console.log(objString)
//   return (
//     <div>
//       <div className="App">
//         <h1>Side Hustle</h1>

//         <div>{Employees.map(({name, age, city, marrried}) => (
//           <div key={age}>
//             <h3>What's your name? {name}</h3>
//             <p>What city do you live in? {city}</p>
//             <p>Are you Married? {marrried ? "Yes" : "No"}</p>
//           </div>
//         ))}
//         </div>
//       </div>
//     </div>
//   )
// }
