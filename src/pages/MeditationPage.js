import React from "react";
import NavBar from "../components/MeditationTherapyComponents/NavigationBar";
import "./MeditationTherapyStyles.css";
import Meditator from "../assets/MeditationTherapyPics/Meditate.png";
import Sessions from "../components/MeditationTherapyComponents/Sessions";
function MeditationPage()
{
   return <div>
    
   <NavBar></NavBar>
   <br/><br/><br/><br/>
   <div className="container" id="main-meditation-cont">
    <div className="row">
     <div className="col my-auto">
      <h1 id="med-text-header" className="theme-pink">Meditation</h1>
      <p id="med-text" className="theme-blue">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
</p>
     </div>
     <div className="col">
      <img src={Meditator} className="img-fluid" id="meditator"></img>
     </div>
    </div>
    
   </div>
   <div className="container" id="meditation-quote">
   
   <blockquote id="med-text" >“Touch your inner space, which is nothingness, as silent and empty as the sky; it is your inner sky. Once you settle down in your inner sky, you have come home, and a great maturity arises in your actions, in your behavior. Then whatever you do has grace in it. Then whatever you do is a poetry in itself. You live poetry; your walking becomes dancing, your silence becomes music.”</blockquote>
   </div>
   
   <Sessions></Sessions>
   </div>
}
export default MeditationPage;