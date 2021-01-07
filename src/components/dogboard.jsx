import React, { Component } from 'react';
import axios from "axios";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {getDogs} from '../services/dogService';
import httpService from '../services/httpService';
import config from '../config.json';

const dogUrl = config.dogUrl;
class DogBoard extends Component {
    state = { 
        count: 1,
        images: []
     }


     

     componentDidMount() {
        this.loadDogs();

     }

     async loadDogs() {
        let dogArr = [];
        for (let i=0; i<this.state.count; i++) {
           const fetchDogs = await this.getDogs();
           console.log(fetchDogs);
           dogArr.push(fetchDogs.data);

        }
       
       this.setState({images: [dogArr]});
     }

     moreDogs() {
        this.setState({count: this.state.count + 1});
        this.loadDogs();
     }
     async getDogs() {
        return await httpService.get(dogUrl);
    
     }
     

    // getImage()  {
        // let imageArr = this.state.images;
        // let i=imageArr.length;
        
        //   while ( i<=count) {
        //       console.log('reloading');
        //       let uri = "https://dog.ceo/api/breeds/image/random";
        //       const data = axios.get(uri);
        //       imageArr.push(data.data.message);
        //       i++;
      
        //     }
        
        // setImage(imageArr);
    // }

    render() { 
        const { images, count } = this.state;
        return ( 
            <div className="container">
                <div className="row">

                <button className="btn-primary btn" onClick={() => { this.moreDogs(); }}>More Dogs!</button>
                <button className="btn-primary btn" onClick={() => { }}>Less Dogs</button>

                <div className=" mt-3 mr-3"><FontAwesomeIcon className="pull-right cursor-pointer primary" icon={faRedo} onClick={ console.log('clicked')} /></div>

                </div>
                <div className="row">
                {images.map((item) => {
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
    }
}
 
export default DogBoard;