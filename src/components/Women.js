import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Icon from './Icon';

class Women extends Component {

  
    render() {
           
        return (
           <div className="women_wrapper">

              <h1 className="title_new">new</h1>
              
              <div className="content-container">

                 <div className="slide-title">
                     <h3 className="slide-title-top">spring summer 2019</h3>
                     <h2 className="slide-title-bot go-up">ice cream</h2>
                 </div>

                 <div className="slide-title">
                     <h3 className="slide-title-top">spring summer 2019</h3>
                     <h2 className="slide-title-bot go-up">summer packing</h2>
                 </div>

                 <div className="slide-title">
                     <h3 className="slide-title-top">spring summer 2019</h3>
                     <h2 className="slide-title-bot go-up">clean lines</h2>
                 </div>

                 <div className="content-container-text">               
                
                     <div className="content-container-text-title">

                         <h4>editorial</h4>
                         <div className="search_wrapper">
                            <div  className="icon">
                                <Icon icon='search'/>
                            </div>
                            <input className="search_wrapper-input" type="text"/>
                         </div>

                     </div>

                     <div className="content-container-text-social">

                         <ul className="content-container-text-social-list">
                             <li className="content-container-text-social-list-item">
                                  <a href="#"className="content-container-text-social-list-item-link">
                                      facebook
                                  </a>
                             </li>
                             <li className="content-container-text-social-list-item">
                                  <a href="#"className="content-container-text-social-list-item-link">
                                      twitter
                                  </a>
                             </li>
                             <li className="content-container-text-social-list-item">
                                  <a href="#"className="content-container-text-social-list-item-link">
                                      instagram
                                  </a>
                             </li>
                         </ul>

                     </div>

                     <div className="content-container-text-nav">

                        <ul className="content-container-text-nav-list">
                        
                            <li className="content-container-text-nav-list-item">
                                <Link to="/" className="active">women</Link> 
                            </li>
                            <li className="content-container-text-nav-list-item">
                                <Link to="/#">trf</Link> 
                            </li>
                            <li className="content-container-text-nav-list-item">
                                <Link to="/#">men</Link>
                            </li>
                            <li className="content-container-text-nav-list-item">
                                <Link to="/#">kids</Link>
                            </li>

                        </ul>

                     </div>

                     <div className="content-container-text-first-box-wrapper boxes">

                        <div className="content-container-text-box box1" 
                            
                        >
                        </div>
                        <div className="content-container-text-box box2" 
                           
                        >
                        </div>

                     </div>

                    <div className="content-container-text-second-box-wrapper boxes">

                        <div className="content-container-text-box box3"
                            
                        >
                        </div>
                        <div className="content-container-text-box box4" 
                            
                        >
                        </div>

                    </div>

                    <div className="content-container-text-third-box-wrapper boxes">

                        <div className="content-container-text-box box5"
                            
                        >
                        </div>
                        <div className="content-container-text-box box6" 
                            
                        >
                        </div> 

                    </div>                                     
                    
                 </div>   {/* content-container-text */}

                 <div className="content-container-img">

                    <div className="first-slide-img mySlides" 
                      
                    >

                        <div className="first-slide-img-box box1" 
                            
                        >
                        </div>
                        <div className="first-slide-img-box box2"
                           
                        >
                        </div>

                    </div>

                    <div className="second-slide-img mySlides"
                        
                    >

                        <div className="second-slide-img-box box1" 
                           
                        >
                        </div>
                        <div className="second-slide-img-box box2"
                            
                        >
                        </div>
                    </div>

                    <div className="third-slide-img mySlides"
                         
                    >

                        <div className="third-slide-img-box box1" 
                           
                        >
                        </div>
                        <div className="third-slide-img-box box2" 
                           
                        >
                        </div>

                    </div>

                 </div>  {/* content-container-img */}

              </div>  {/* contect-container*/}

        
             
             <div className="more_button">

                 <div className="more_button-wrapper">
                     <h4 className="more_button-wrapper-text">more</h4>
                 </div>

             </div>

           </div>   //  women_wrapper

        );
    }
}

export default Women;