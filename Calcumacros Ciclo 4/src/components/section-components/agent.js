import React from 'react';

const Agent = () => {


  let publicUrl = process.env.PUBLIC_URL+'/'

  return <div className="agent-area text-center pd-top-118 pd-bottom-90">
      <div className="container">
        <div className="section-title text-center">
          <h6>Nosotros</h6>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="single-agent-wrap">
              <div className="thumb">
                <img className="dee" src={publicUrl+"assets/img/agent/deedee.jpeg"} alt="img" />
              </div> 
              <div className="details">
                <h4>Dee Dee Grimaldos</h4>
                <h6>Desarrollador Backend</h6>
                <ul className="social-area style-2">
                  <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                  <li><a href=" https://www.instagram.com/deedee_g_/"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                  <li><a href="https://twitter.com/"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                </ul>
              </div>        
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-agent-wrap">
              <div className="thumb">
                <img className="mat" src={publicUrl+"assets/img/agent/Mateo.JPG"} alt="img" />
              </div> 
              <div className="details">
                <h4>Mateo Santana</h4>
                <h6>Desarrollador Frontend</h6>
                <ul className="social-area style-2">
                  <li><a href=" https://www.linkedin.com/in/mateo-santana-a1a619125/"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                  <li><a href=" https://www.instagram.com/mateosantanam/"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                  <li><a href="https://twitter.com/"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                </ul>
              </div>        
            </div>
          </div>
          
        </div>
      </div>
    </div>

}

export default Agent