import React, { useState, useEffect } from "react";
import axios from "axios";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SampleImage = () => {
    const [count, setCount] = useState(1);
    const [image, setImage] = useState([]);
//   const [numImages, setNumImages] = useState(1);
  const [refreshClicked, setRefreshClicked] = useState(1);

  // use effect to grab an image
  // add some button configurations to change the image style
  // b/c why not!

  function clearImages()
   {
       console.log('refresh');
       const newImages = [];
    //    setImage(newImages);
       console.log(image.length);
       getImage();
   }
  async function getImage() {
      let imageArr = image;
      let i=imageArr.length;
      console.log(i);
      
        while ( i<=count) {
            console.log('reloading');
            let uri = "https://dog.ceo/api/breeds/image/random";
            const data = await axios.get(uri);
            imageArr.push(data.data.message);
            i++;
    
          }
      
      setImage(imageArr);
  }

  function removeImages()
  {
    let imageArr = image;
    imageArr = imageArr.slice(imageArr.length-count);
    setImage(imageArr);

  }

  // execute when the counter changes only
  useEffect(() => {
     
    if (image.length >= count) {
        removeImages();
    } else {

        getImage();
    }
 
  }, [count]);
  

  return (
    <div className="container">
    <div className="row">

    <button className="btn-primary btn" onClick={() => { setCount(count + 1)}}>More Dogs!</button>
    <button className="btn-primary btn" onClick={() => { setCount(count - 1)}}>Less Dogs</button>

    <div className=" mt-3 mr-3"><FontAwesomeIcon className="pull-right cursor-pointer primary" icon={faRedo} onClick={() => clearImages() } /></div>

    </div>
      <div className="row">
      {image.map((item) => {
            return (
            <div key={item} className="col-lg-4">
            <div className="card">

            <div className="card-body">
            <img src={item} alt="" className="card-img-top img-fluid" />

            </div>
            </div>
            </div>
            )
      })}
       
      </div>
    </div>
  );
};

export default SampleImage;
