import React from "react";
import HairDresser from "../Components/HairDresser";
import {hairDresserList} from "../data";
import {withRouter} from "react-router-dom"
import axios from "axios";


class CutProfile extends React.Component{
    constructor(props){
        super(props)

        this.state={
            sex:this.props.sex,
            hairDresserList: []
            
            
        }
        this.signup=this.signup.bind(this)
        this.getTitle1=this.getTitle1.bind(this);
        this.getTitle2=this.getTitle2.bind(this);

    
    
    }

    signup(event){
        event.preventDefault();
        this.props.history.push("/signup")

    }

    componentDidMount(){
        axios.get("https://localhost:3000/getHairDressers", )
    }
    

   

    getTitle2(){
        
        const path = window.location.pathname  // get the path
        const splitted = path.split("/");// split on the back slash
        return splitted[splitted.length - 1];   // return last element
    }

    getTitle1(){
        
        const path = window.location.pathname  // get the path
        const splitted = path.split("/");// split on the back slash
        return splitted[splitted.length - 2];   // return last element
    }

    render(){
        return(
            <div className="text-center" style={{fontFamily:"optima"}}>
                <div className="">
                    <nav style={{backgroundColor: "black"}} className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                        <a style={{fontSize:35, fontFamily:"optima"}} className="navbar-brand" href={`/cuts/${this.getTitle1()}/${this.getTitle2()}`}>{this.getTitle2().toUpperCase()}</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div style={{fontSize: 20, fontFamily:"optima"}} className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav  m-auto">
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
                                    <a onClick={this.signup} style={{color:"white", textDecoration:"underline"}}className="nav-link" href="/signup">Sign Up to be Featured</a>
                                </div>
                            <span className="navbar-text"></span>
                        </div>
                    </nav>         
                    <div className="">
                       
                    </div>
                    <div >
                        <ul style={{paddingInlineStart:0, paddingInlineEnd:0}}>
                        {hairDresserList.map((stylist, index)=>{
                            if (stylist.specialty === this.getTitle2())
                            
                            return(

                                <HairDresser key={index} id={stylist.id} image={stylist.image} name={stylist.name} description={stylist.description} />
                            )
                            })}
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(CutProfile);