import React from "react";
import TypeOfCut from "../Components/TypeOfCut";
import {mensCutList} from "../data";
import {withRouter} from "react-router-dom";

class MensCuts extends React.Component{
    constructor(props){
        super(props)

        this.state={
            sex:"men"

        }  
        this.signup=this.signup.bind(this); 
    }

    signup(event){
        event.preventDefault();
        this.props.history.push("/signup")

    }

    render(){
        
        return(

            <div style={{textAlign:"center"}}>
                <div></div>
                <div className="text-center">
                    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                        <a style={{fontSize:35, fontFamily:"optima"}} className="navbar-brand" href="/cuts/men">Men's Styles</a>
                        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div style={{fontSize:20, fontFamily:"optima"}} className="collapse navbar-collapse justify-content-center" id="navbarText">
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item active mx-5">
                                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item active mx-5">
                                    <a className="nav-link" href="/cuts/men">Men</a>
                                </li>
                                <li className="nav-item active mx-5">
                                    <a className="nav-link" href="/cuts/women">Women</a>
                                </li>
                            </ul>
                                <div className="nav-item active">
                                    <a onClick={this.signup} style={{color:"white", textDecoration:"underline"}} className="nav-link" href="/signup">Sign up to be featured</a>
                                </div>
                        </div>
                            <span class="navbar-text"></span>
                    </nav>         
                
                </div>
                <div >
                    <ul style={{paddingInlineStart:0, paddingInlineEnd:0}}>
                        {mensCutList.map((cut, index) =>(
        
                        
                            <TypeOfCut  sex={this.state.sex} key={index} image={cut.image} title={cut.title}/>  
                          
                        
                        ))}
                       
       
                    </ul>
                    
                </div>

            </div>
        )
    }
}

export default withRouter(MensCuts);