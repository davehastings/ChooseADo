import React from "react";
import _ from "underscore";
import {hairDresserList} from "../data";
import {withRouter} from "react-router-dom";
import Reviews from "../Components/Reviews";


class Stylist extends React.Component{
    constructor(props){
        super(props)

        this.state={
           


        }
        this.getId=this.getId.bind(this);
        this.getUser=this.getUser.bind(this);
        this.signup=this.signup.bind(this);
    }

    componentDidMount(){
        this.getUser()
    }

    signup(event){
        event.preventDefault();
        this.props.history.push("/signup")

    }

    getId(){
        
        const path = window.location.pathname  // get the path
        const splitted = path.split("/");// split on the back slash
        return splitted[splitted.length - 1]; 
          // return last element
    }

    getUser(){
        
        let stylist = _.findWhere(hairDresserList, {id: parseInt(this.getId())})
        return stylist;
        
    }
   
    

    render(){
        const stylist = this.getUser();
        

        return(
            <div>
                <nav style={{backgroundColor: "black", fontFamily:"optima"}} className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                    <a style={{fontSize:30, fontFamily:"optima"}} className="navbar-brand" href={`/stylist/${stylist.id}`}>{stylist.name}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarText">
                        <ul style={{fontSize: 20}} className="navbar-nav mx-auto">
                            <li className="nav-item active mx-5">
                                <a onClick={this.home} className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active mx-5">
                                <a className="nav-link" href="/cuts/men">Men</a>
                            </li>
                            <li className="nav-item active mx-5">
                                <a className="nav-link" href="/cuts/women">Women</a>
                            </li>
                        </ul>
                            <div className=" ml-auto nav-item active">
                                <a onClick={this.signup} style={{fontSize: 15,color:"white", textDecoration:"underline"}} className="nav-link" href="/signup">Sign Up to be featured</a>
                            </div>
                        <span className="navbar-text"></span>
                    </div>
                </nav>  
                <div style={{paddingLeft:20, fontFamily:"optima"}}>
                
                <div>

                    
                    
                    <br></br>
                </div>
                <div className="text-center">
                    <div>

                    <img className="img-thumbnail border border-secondary rounded-lg" style={{width:200, height:"auto"}} alt="" src={stylist.image}/>
                    </div>
                    <br></br>
                    <div >
                        <div style={{fontSize:30, fontWeight:"bold"}}>Description</div>
                        <br></br>
                        <div style={{}}>{stylist.description}</div>

                    </div>
                    <br></br>
                    <div>
                    <div >
                        <div style={{fontSize:30, fontWeight:"bold"}}>Specialties</div>
                        <br></br>
                        <div style={{}}>{stylist.specialties}</div>

                    </div>
                        
                    
                    </div>
                    {/* <div >
                        <div style={{paddingLeft:20, fontSize:30, fontWeight:"bold"}}>Reviews</div>
                        <br></br>
                        <div style={{paddingLeft:40}}>"{stylist.name} really knows what he is doing!" - John</div>

                    </div> */}
                    <br></br>
                    <div style={{marginBottom:20}}>

                    <a  href="/signup" >Sign Up to be Featured</a>
                    </div>
                </div>       
                </div>
                
                <div style={{height:50, backgroundColor:"rgb(120, 71, 83)", marginBottom:20}}>

                </div>
                <div style={{textAlign:"center"}}>

                <Reviews/>
                </div>
            
            
            </div>
        )
    }



}

export default withRouter(Stylist);