import React from "react";
import {specialties} from "../data";
import _ from "underscore";
import {withRouter} from "react-router-dom";

class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            email:"",
            password:"",
            specialties:this.initializeSpecialtyState(),
        }

        this.handleOnEmail=this.handleOnEmail.bind(this);
        this.handleOnName=this.handleOnName.bind(this);
        this.handleOnPassword=this.handleOnPassword.bind(this);
        this.handleSpecialties=this.handleSpecialties.bind(this);   
    }

    initializeSpecialtyState(){
        let array = [];
        for (let specialty of specialties){              
            //set the state of the values to false           
            array.push({name: specialty.name, selected:false})  
        }
        return array;

    }

    handleSpecialties(event){
        event.preventDefault();
        let index = _.findIndex(this.state.specialties, {name:event.target.value})
        const specialties = this.state.specialties.slice();
        specialties[index].selected=!specialties[index].selected
        console.log(specialties[index].selected)
        this.setState({
            specialties
        });
    }

    handleOnName(event){
        this.setState({name: event.target.value});
    }

    handleOnEmail(event){
        this.setState({email: event.target.value});
    }

    handleOnPassword(event){
        this.setState({password: event.target.value});
    }
    
    render(){
        return(
        <div className="" style={{}} >
            <div>
                <nav style={{backgroundColor: "black"}} className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                    <a style={{fontSize:35, fontFamily:"optima"}} className="navbar-brand" href="/signup">Signup</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul style={{fontFamily:"optima", fontSize:20}} className="navbar-nav  m-auto">
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
                        <span className="navbar-text"></span>
                    </div>
                </nav>  
            </div>
            <div style={{fontFamily:"optima"}}>
                <form  className="form-inline">
                    <div style={{}}>
                        <div style={{height:20}}>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="column">
                                    <div className="col-md-3 my-4">
                                        <h3>Name</h3>
                                        <input className="form-control mr-sm-2" type="text" value={this.state.name}  onChange={this.handleOnName}/>
                                    </div>
                                    <div className="col-md-3 my-4">
                                        <h3>Email</h3>
                                        <input className="form-control mr-sm-2" type="text" value={this.state.email} onChange={this.handleOnEmail}/>
                                    </div>
                                    <div className="col-md-3 my-4">
                                        <h3>Password</h3>
                                        <input className="form-control mr-sm-2" type="password" value={this.state.password} onChange={this.handleOnPassword}/>
                                    </div>
                                </div>  
                                </div>
                            <div className=" my-3">
                                <h3>Profile Picture</h3>
                                <form>
                                    <div class="form-group col-md-8">
                                        <label for="exampleFormControlFile1">Example file input</label>
                                        <input type="file" className="form-control-file btn btn-outline-secondary" id="exampleFormControlFile1" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <br></br>
                        <div className="container-fluid text-center" style={{display:"flex", flexFlow:"column"}}>
                            <div className="mr-auto">
                            <h3>Specialities</h3>                         
                            <div></div>
                            {this.state.specialties.map((specialty, index)=>{
                                return (
                                <div className="" key={index}>
                                    <br></br>
                                    <div>
                                        <label >{specialty.name.toUpperCase()}</label>
                                    </div>
                                    <div>
                                        <input  onChange={this.handleSpecialties} type="checkbox" id="" name="" value={specialty.name}/>
                                    </div>
                                </div>
                                )
                            })}
                            <div style={{paddingTop:20}}>
                            <button className="btn btn-secondary" >Submit</button>
                            </div>  
                            </div>  
                        </div>
                    </div>
                </form>
                    <br></br>
            </div>
            <br></br>
        </div>
        )
    }
}

export default withRouter(SignUp);