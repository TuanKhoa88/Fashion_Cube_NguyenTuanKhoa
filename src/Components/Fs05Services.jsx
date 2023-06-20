import React from 'react'
import "./Fs05Services.scss"

export default function Fs05Services() {
  return (
    <div className="container" style={{ display: "flex", gap: "5px", width: "84%", justifyContent: "center", alignItems: "center", marginBottom : "50px" }}>
      <div style={{ display: "flex", gap: "30px", width: "380px", height: "80px", backgroundColor: "#f3f3f3" }}>
        <img src="./images/car.jpg" alt="" />
        <div className="container_text_size">
          <span className = "text_size">FREE SHIPPING</span><br />
          <span className="text_size">Suffered Alteration</span>
        </div>
      </div>
      <div style={{ display: "flex", gap: "30px", width: "380px", height: "80px", backgroundColor: "#f3f3f3" }}>
        <img src="./images/lap.jpg" alt="" />
        <div className="container_text_size">
          <span className="text_size">CACH ON DELIVERY</span><br />
          <span className="text_size">The Internet Tend To Report</span>
        </div>
      </div>
      <div style={{ display: "flex", gap: "30px", width: "380px", height: "80px", backgroundColor: "#f3f3f3" }}>
        <img src="./images/money.jpg" alt="" />
        <div className="container_text_size">
          <span className="text_size">45 DAYS RETURN</span><br />
          <span className="text_size">Working it look like Readable</span>
        </div>
      </div>
      <div style={{ display: "flex", gap: "30px", width: "380px", height: "80px", backgroundColor: "#f3f3f3" }}>
        <img src="./images/time.jpg" alt="" />
        <div className="container_text_size">
          <span className="text_size">OPENING ALL WEEK</span><br />
          <span className="text_size">8AM-09PM</span>
        </div>
      </div>
    </div>
  )
}
