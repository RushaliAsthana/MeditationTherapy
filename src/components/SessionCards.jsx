import React from "react";
import Pic from "./assets/MeditationTherapyPics/Group 1.png";
import SessionsContent from "./SessionsContent";
function Test()
{   
    return <div id="bla"><div className="row">
     <div className="col">
     <div className="border shadow">
          <img src={SessionsContent[0].image} className="img-fluid "></img>
          <p className="text-center mt-3 mb-3">{SessionsContent[0].therapy}</p>
     </div>
     </div>
     <div className="col">
     <div className="border shadow">
          <img src={SessionsContent[1].image}  className="img-fluid"></img>
          <p className="text-center mt-3 mb-3">{SessionsContent[1].therapy}</p>
     </div>
     </div>
     <div className="col">
     <div className="border shadow">
          <img src={SessionsContent[2].image} className="img-fluid"></img>
          <p className="text-center mt-3 mb-3">{SessionsContent[2].therapy}</p>
      </div></div>
     </div><br/>
     <div className="row">
     <div className="col">
     <div className="border shadow">
        <img src={SessionsContent[3].image} className="img-fluid "></img>
        <p className="text-center mt-3 mb-3">{SessionsContent[3].therapy}</p>
        </div>
     </div>
     <div className="col">
     <div className="border shadow">
          <img src={SessionsContent[4].image}  className="img-fluid"></img>
          <p className="text-center mt-3 mb-3">{SessionsContent[4].therapy}</p>
          </div>
     </div>
     <div className="col">
     <div className="border shadow">
          <img src={SessionsContent[5].image} className="img-fluid"></img>
          <p className="text-center mt-3 mb-3">{SessionsContent[5].therapy}</p>
          </div>
      </div>
     </div><br/>
     <div className="row">
     <div className="col">
     <div className="border shadow">
           <img src={SessionsContent[6].image} className="img-fluid "></img>
           <p className="text-center mt-3 mb-3">{SessionsContent[6].therapy}</p>
           </div>
     </div>
     <div className="col">
     <div className="border shadow">
          <img src={SessionsContent[7].image}  className="img-fluid"></img>
          <p className="text-center mt-3 mb-3">{SessionsContent[7].therapy}</p>
          </div>
     </div>
     <div className="col">
     <div className="border shadow">
          <img src={SessionsContent[8].image} className="img-fluid"></img>
          <p className="text-center mt-3 mb-3">{SessionsContent[8].therapy}</p>
          </div>
      </div>
     </div><br/>
    
     </div>
    
}
export default Test;