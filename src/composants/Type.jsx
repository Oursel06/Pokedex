
import React from "react"

function Type({ pType, sType }) {

  if (sType != null && pType != null) {
    return (
      <div className="type">
        {colorType(pType)}
        {colorType(sType)}
      </div>
    )
  }
  else if (sType == null) {
    return (
      <div className="type">
        {colorType(pType)}
      </div>
    )
  }
  else {
    return (
      <p>Aucun type</p>
    )
  }
}

const colorType = (type) => {
  let colorBackground = "";
  if (type === "normal") {
    colorBackground = "lightgray";
  } else if (type === "fire") {
    colorBackground = "orange";
  } else if (type === "grass") {
    colorBackground = "green";
  } else if (type === "water") {
    colorBackground = "cornflowerblue";
  } else if (type === "electric") {
    colorBackground = "yellow";
  } else if (type === "flying") {
    colorBackground = "mediumpurple";
  } else if (type === "ground") {
    colorBackground = "bisque";
  } else if (type === "rock") {
    colorBackground = "burlywood";
  } else if (type === "psychic") {
    colorBackground = "palevioletred";
  } else if (type === "fighting") {
    colorBackground = "darkred";
  } else if (type === "bug") {
    colorBackground = "greenyellow";
  } else if (type === "poison") {
    colorBackground = "purple";
  } else if (type === "steel") {
    colorBackground = "grey";
  } else if (type === "ghost") {
    colorBackground = "darkslateblue";
  } else if (type === "ice") {
    colorBackground = "aquamarine";
  } else if (type === "dark") {
    colorBackground = "black";
  } else if (type === "fairy") {
    colorBackground = "salmon";
  } else if (type === "dragon") {
    colorBackground = "mediumblue";
  } else {
    colorBackground = "white";
  }
  return (
    <div className="type">
      <p style={{ backgroundColor: colorBackground, padding: "5px" }} >{type}</p>
    </div>
  )
}


export default Type;
