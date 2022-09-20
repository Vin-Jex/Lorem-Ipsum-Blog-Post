import React from 'react'

const Cards = ({ results }) => {
  const styles = {
    cardContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap", 
      alignItems: "center",
    },
    cardBox: {
      width: "15rem",
      fontSize: "1rem",
      height: "20rem",
      margin: "1rem .5rem",
      padding: " .5rem 1em",
      background: "blue",
      color: "#fff"
    },
  }

  return (
    <div style={styles.cardContainer}>
      {results && results.map(({id, title, body}) => (
        <div style={styles.cardBox} key={id}>
          <h2>{id}</h2>
          <h4> {title}</h4>
          <p> {body} </p> 
        </div>   
      ))}
    </div>
  )
}

export default Cards
