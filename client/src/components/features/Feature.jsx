import React from 'react'

const Feature = ({ headline, subheadline, text, image, alt, side }) => {
    let c = "d-md-flex align-items-center py-5 ";
    side === "left" ? c += "flex-row-reverse" : c+= "flex-row";

  return (
    <div className={c}>
        <div className="col col-md-6 px-4 mb-5">
            <h4 className="fw-semibold mb-2" style={{ fontSize: "min(3em, 10vw)"}}>{headline}</h4>
            {subheadline && 
                <h5 style={{ fontSize: "min(2em, 6.5vw)", marginTop: "-.6rem"}}>{subheadline}</h5>
            }
            <p className="text-muted" style={{ fontSize: "min(1.5em, 5vw)"}}>{text}</p>
        </div>
        <div className="col col-md-6 text-center">
            <img src={image} alt={alt} style={{ width: "60%", borderRadius: "16px", border: "1px solid black"}} />
        </div>
    </div>
  )
}

export default Feature