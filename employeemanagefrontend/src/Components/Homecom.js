import React from "react";
import "./Homecom.css";
import {useEffect,useState} from "react";
export default function Homecom(){
    const [index, setIndex] = useState(0);
    const imagescom= ['./images/homecom3.jpg', './images/homecom2.jpg','./images/homecom4.jpg'];
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % imagescom.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);
    return (
    <>
    <h1 id="ourstory">Our story</h1>
    <div className="containercom">
    <div className="containercom1" >
    <img src= {imagescom[index]} style={{width:'600px',height:'400px',padding:'40px',position:"relative",top:'50px'}}></img>
    </div> 
    <div className="containercom2">
    <p>
    Wood gives structural strength to the trunk of most types of tree; this supports the plant as it grows larger. The vascular system of trees allows water, nutrients and other chemicals to be distributed around the plant, and without it trees would not be able to grow as large as they do. Trees, as relatively tall plants, need to draw water up the stem through the xylem from the roots by the suction produced as water evaporates from the leaves. If insufficient water is available the leaves will die.[25] The three main parts of trees include the root, stem, and leaves; they are integral parts of the vascular system which interconnects all the living cells. In trees and other plants that develop wood, the vascular cambium allows the expansion of vascular tissue that produces woody growth. Because this growth ruptures the epidermis of the stem, woody plants also have a cork cambium that develops among the phloem. The cork cambium gives rise to thickened cork cells to protect the surface of the plant and reduce water loss. Both the production of wood and the production of cork are forms of secondary growth
    </p>
    </div>
    </div>
    </>
  )
}
  
  

