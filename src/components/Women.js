import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Icon from './Icon';

class Women extends Component {

  state = {

    boxscale:["scaleX(0)","scaleX(0)","scaleX(0)"],
    myIndex:0,
    halfHeight:`${window.innerHeight}`/2,
    halfWidth:`${window.innerWidth}`/2,
    Height:`${window.innerHeight}`,
    Width:`${window.innerWidth}`,
    ratio:`${window.innerWidth}`/`${window.innerHeight}`
  }

  
  componentDidMount() {

    setTimeout(() => {
     
        this.carousel()
       }, 1)

      this.nextComponent = setInterval(this.carousel, 5000);

      window.addEventListener("resize", this.updateDimensions);

      console.log(this.state.ratio);
       
  }

  componentWillMount() {

    document.addEventListener('click', this.handleOutsideClick, false);
    document.addEventListener('click', this.handleOutsideClick2, false);
    window.addEventListener("resize", this.updateDimensions);

  }
 
  componentWillUnmount() {

    clearInterval(this.nextComponent);
    window.removeEventListener("resize", this.updateDimensions);
    document.removeEventListener('click', this.handleOutsideClick, false);
    document.removeEventListener('click', this.handleOutsideClick2, false);
     
  }

  updateDimensions = () => {

    this.setState({
        halfHeight:`${window.innerHeight}`/2,
        halfWidth:`${window.innerWidth}`/2,
        Height:`${window.innerHeight}`,
        Width:`${window.innerWidth}`,
        ratio:`${window.innerWidth}`/`${window.innerHeight}`,
      })
  }

 carousel = () => {

      let i;
      let x = document.getElementsByClassName("mySlides");
      let y = JSON.parse(JSON.stringify(this.state.boxscale));
      let z = document.getElementsByClassName("go-up");
      let t = document.getElementsByClassName("boxes");
     
     
      for (i = 0; i < x.length; i++) {

        x[i].style.display = "none";
        y[i] = "scaleX(0)";
        z[i].style.opacity = "0";
        z[i].style.transform = "translateY(5rem)";
        t[i].style.display = "none";      
        

        setTimeout(() => {
        
        this.setState({
          boxscale:y 
          }) 
        }, 4200);

      }

      this.setState({
        myIndex : this.state.myIndex+1
      })
    
      if (this.state.myIndex > x.length) {
        this.setState({
          myIndex: 1
      })} 

      x[this.state.myIndex-1].style.display = "flex";
      y[this.state.myIndex-1]="scaleX(1)";  
      t[this.state.myIndex-1].style.display = "flex";   

      setTimeout(() => {
        
        z[this.state.myIndex-1].style.transform = "translateY(0)";
        z[this.state.myIndex-1].style.opacity = "1";
        }, 10);

      setTimeout(() => {
        
        z[this.state.myIndex-1].style.transform = "translateY(-5rem)";
        z[this.state.myIndex-1].style.opacity = "0"; 
      }, 4100);
  
}


    render() {

        const  slide_one  =  require('../resources/images/img1.jpg');
        const  slide_one2 =  require('../resources/images/img12.jpg');
        const  slide_one3 =  require('../resources/images/img16.jpg');
        const  slide_two  =  require('../resources/images/img2.jpg');
        const  slide_two2 =  require('../resources/images/img22.jpg');
        const  slide_two3 =  require('../resources/images/img26.jpg');
        const  slide_three = require('../resources/images/img3.jpg');
        const  slide_three2 = require('../resources/images/img32.jpg');
        const  slide_three3 = require('../resources/images/img36.jpg');
           
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
                         <div className="search_wrapper" onClick={()=>this.handleClick()}
                              ref="megaMenu"
                         >
                            <div  className="icon">
                                <Icon icon='search' transform={this.state.clicked ? 
                                        "translateX(-.7rem) translateY(.7rem)" : null}
                                    fill={this.state.clicked ? "#999" : null}
                                />
                            </div>
                            <input className="search_wrapper-input" type="text"
                                   style={this.state.clicked && this.state.Width > 900 ? 
                                    {transform:"scale(1)" ,width:"25rem"} : 
                                    this.state.clicked && this.state.Width < 900 ? 
                                    {transform:"scale(1)" ,width:"16rem"} : null}
                            />
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
                            style={{transform:this.state.boxscale[0]}}
                        >
                        </div>
                        <div className="content-container-text-box box2" 
                            style={{transform:this.state.boxscale[0]}}
                        >
                        </div>

                     </div>

                    <div className="content-container-text-second-box-wrapper boxes">

                        <div className="content-container-text-box box3"
                            style={{transform:this.state.boxscale[1],backgroundPosition:"top",
                            backgroundSize:`${this.state.halfWidth}px ${this.state.Height}px`}}
                        >
                        </div>
                        <div className="content-container-text-box box4" 
                            style={{transform:this.state.boxscale[1],
                                backgroundPosition:`right 0 top ${this.state.halfHeight}px`,
                                backgroundSize:`${this.state.halfWidth}px ${this.state.Height}px`}}
                        >
                        </div>

                    </div>

                    <div className="content-container-text-third-box-wrapper boxes">

                        <div className="content-container-text-box box5"
                            style={{transform:this.state.boxscale[2]}}
                        >
                        </div>
                        <div className="content-container-text-box box6" 
                            style={{transform:this.state.boxscale[2]}}
                        >
                        </div> 

                    </div>                                     
                    
                 </div>   {/* content-container-text */}

                 <div className="content-container-img">

                    <div className="first-slide-img mySlides" 
                        style={{

                            background:this.state.ratio < 2.1 && this.state.Width > 480 ?
                            `url(${slide_one})` : this.state.Width > 480 ? `url(${slide_one2})` :
                            `url(${slide_one3})`,
                            backgroundSize: this.state.Width > 720 ? `${this.state.halfWidth}px
                            ${this.state.Height}px` : `${this.state.Width}px ${this.state.Height}px`
                        }}
                    >

                        <div className="first-slide-img-box box1" 
                            style={{

                                transform:this.state.boxscale[0],backgroundPosition:"top",
                                background:this.state.ratio < 2.1 && this.state.Width > 480 ?
                                `url(${slide_two})` : this.state.Width > 480 ? `url(${slide_two2})` :
                                `url(${slide_two3})`,
                                backgroundSize:this.state.Width > 720 ? `${this.state.halfWidth}px
                                ${this.state.Height}px` : `${this.state.Width}px 
                                ${this.state.Height}px`
                            }}
                        >
                        </div>
                        <div className="first-slide-img-box box2"
                            style={{

                                transform:this.state.boxscale[0],
                                background:this.state.ratio < 2.1 && this.state.Width > 480 ?
                                `url(${slide_two})` : this.state.Width > 480 ? `url(${slide_two2})` :
                                `url(${slide_two3})`,
                                 backgroundPosition:`left 0 top ${this.state.halfHeight}px`,
                                 backgroundSize:this.state.Width > 720 ? `${this.state.halfWidth}px
                                 ${this.state.Height}px` : `${this.state.Width}px 
                                 ${this.state.Height}px`
                             }}
                        >
                        </div>

                    </div>

                    <div className="second-slide-img mySlides"
                        style={{

                            background:this.state.ratio < 2.1 && this.state.Width > 480 ?
                            `url(${slide_two})` : this.state.Width > 480 ? `url(${slide_two2})` :
                            `url(${slide_two3})`,
                            backgroundSize: this.state.Width > 720 ? `${this.state.halfWidth}px
                            ${this.state.Height}px` : `${this.state.Width}px ${this.state.Height}px`
                        }}
                    >

                        <div className="second-slide-img-box box1" 
                            style={{
                                transform:this.state.boxscale[1],backgroundPosition:"top",
                                background:this.state.ratio < 2.1 && this.state.Width > 480 ?
                                `url(${slide_three})` : this.state.Width > 480 ? 
                                `url(${slide_three2})` : `url(${slide_three3})`,
                                backgroundSize:this.state.Width > 720 ? `${this.state.halfWidth}px
                                ${this.state.Height}px` : `${this.state.Width}px 
                                ${this.state.Height}px`
                            }}
                        >
                        </div>
                        <div className="second-slide-img-box box2"
                            style={{

                                    transform:this.state.boxscale[1],
                                    background:this.state.ratio < 2.1 && this.state.Width > 480 ?
                                   `url(${slide_three})` : this.state.Width > 480 ? 
                                   `url(${slide_three2})` :`url(${slide_three3})`,
                                    backgroundPosition:`right 0 top ${this.state.halfHeight}px`,
                                    backgroundSize:this.state.Width > 720 ? `${this.state.halfWidth}px
                                    ${this.state.Height}px` : `${this.state.Width}px 
                                    ${this.state.Height}px`
                                }}
                        >
                        </div>
                    </div>

                    <div className="third-slide-img mySlides"
                          style={{ 
                              
                                 background:this.state.ratio < 2.1 && this.state.Width > 480 ?
                                `url(${slide_three})` : this.state.Width > 480 ? 
                                `url(${slide_three2})` :`url(${slide_three3})`,
                                 backgroundSize: this.state.Width > 720 ? `${this.state.halfWidth}px
                                 ${this.state.Height}px` : `${this.state.Width}px 
                                 ${this.state.Height}px`
                           }}
                    >

                        <div className="third-slide-img-box box1" 
                            style={{

                                  transform:this.state.boxscale[2],backgroundPosition:"top",
                                  background:this.state.ratio < 2.1 && this.state.Width > 480 ?
                                  `url(${slide_one})` : this.state.Width > 480 ? 
                                  `url(${slide_one2})` :`url(${slide_one3})`,
                                  backgroundSize:this.state.Width > 720 ? `${this.state.halfWidth}px
                                  ${this.state.Height}px` : `${this.state.Width}px 
                                  ${this.state.Height}px`
                            }}
                        >
                        </div>
                        <div className="third-slide-img-box box2" 
                            style={{
                                
                                transform:this.state.boxscale[2],
                                background:this.state.ratio < 2.1 && this.state.Width > 480 ?
                                `url(${slide_one})` : this.state.Width > 480 ? 
                                `url(${slide_one2})` :`url(${slide_one3})`,
                                backgroundPosition:`right 0 top ${this.state.halfHeight}px`,
                                backgroundSize:this.state.Width > 720 ? `${this.state.halfWidth}px
                                ${this.state.Height}px` : `${this.state.Width}px 
                                ${this.state.Height}px`
                            }}
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