import React, { Component } from 'react';

import '../styles/Gallery.css';

import chad from '../photos/chad.jpg';
import couple from '../photos/couple.jpg';
import group1 from '../photos/group1.jpg';
import group from '../photos/group.jpg';
import img1 from '../photos/IMG_0179.JPG';
import img2 from '../photos/IMG_0184.JPG';
import img3 from '../photos/IMG_0186.JPG';
import img4 from '../photos/IMG_8014.JPG';
import img5 from '../photos/IMG_8015.JPG';
import img6 from '../photos/IMG_8016.JPG';
import img7 from '../photos/IMG_8017.JPG';
import img8 from '../photos/IMG_8018.JPG';
import img9 from '../photos/IMG_8019.JPG';
import img10 from '../photos/IMG_8020.JPG';
import img11 from '../photos/IMG_8021.JPG';
import img12 from '../photos/IMG_8022.JPG';
import img13 from '../photos/IMG_8023.JPG';
import img14 from '../photos/IMG_8024.JPG';
import img15 from '../photos/IMG_8025.JPG';
import img16 from '../photos/IMG_8026.JPG';
import img17 from '../photos/IMG_8027.JPG';
import remy1 from '../photos/remy1.jpg';
import remy2 from '../photos/remy-2.jpg';
import Anu from '../photos/Vanity Vibes_Anu.jpeg';
import comedian from '../photos/vanityvibes_comedian.jpeg';
import destiny from '../photos/VVibes_Destiny1.jpg';
import jnai from "../photos/VVibes_J'nai_Kendal1.1.jpg";
import sarah from '../photos/VVibes_Sarah_Bailey.jpg';
import cam from '../photos/ybar_Cam_Sara_Dorian_Becca_Chris.jpg';
import dudes from '../photos/ybar_dudes1.jpg';
import kasia from '../photos/ybar_Kasia_Cam_terri_Kwesi.jpg';
import dorian from '../photos/dorian_sara.jpg';

class Gallery extends Component {
  render() {
    return (
        <div>
            <div className="header">
                <h1>Gallery</h1>
                <p>Check out the photos from our previous events</p>
            </div>
                <div className="gallery">
                    <div className="row">
                        <div className="column" style={{marginTop: '3%'}}>
                            <img src={chad} style={{width: '100%'}}></img>
                            <img src={couple} style={{width: '100%'}}></img>
                            <img src={group1} style={{width: '100%'}}></img>
                            <img src={img1} style={{width: '100%'}}></img>
                            <img src={img2} style={{width: '100%'}}></img>
                            <img src={img3} style={{width: '100%'}}></img>
                            <img src={img4} style={{width: '100%'}}></img>
                        </div>
                        <div className="column" >
                            <img src={kasia} style={{width: '100%'}}></img>
                            <img src={img6} style={{width: '100%'}}></img>
                            <img src={img7} style={{width: '100%'}}></img>
                            <img src={img8} style={{width: '100%'}}></img>
                            <img src={img9} style={{width: '100%'}}></img>
                            <img src={img10} style={{width: '100%'}}></img>
                            <img src={img11} style={{width: '100%'}}></img>
                            <img src={img12} style={{width: '100%'}}></img>
                        </div>
                        <div className="column" style={{marginTop:'5%'}}>
                            <img src={jnai} style={{width: '100%'}}></img>
                            <img src={img13} style={{width: '100%'}}></img>
                            <img src={img14} style={{width: '100%'}}></img>
                            <img src={img15} style={{width: '100%'}}></img>
                            <img src={img16} style={{width: '100%'}}></img>
                            <img src={img17} style={{width: '100%'}}></img>
                            <img src={remy1} style={{width: '100%'}}></img>
                            <img src={comedian} style={{width: '100%'}}></img>
                            <img src={img5} style={{width: '100%'}}></img>
                        </div>
                        <div className="column" style={{marginTop: '2%'}}>
                            <img src={dorian} style={{width: '100%'}}></img>
                            <img src={remy2} style={{width: '100%'}}></img>
                            <img src={Anu} style={{width: '100%'}}></img>
                            <img src={destiny} style={{width: '100%'}}></img>
                            <img src={sarah} style={{width: '100%'}}></img>
                            <img src={cam} style={{width: '100%'}}></img>
                            <img src={group} style={{width: '100%'}}></img>
                            <img src={dudes} style={{width: '100%'}}></img>
                        </div>
                    </div>
                </div>
                <div className="below-gal">
                    <h4 id="gallery-contact">Want to be included in our gallery, or get your pictures taken? Come to our next event or DM for a personal photo shoot</h4>
                </div>
        </div>
    );
  }
}

export default Gallery;