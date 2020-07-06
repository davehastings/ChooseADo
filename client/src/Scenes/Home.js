
import React from "react";
import {withRouter} from "react-router-dom";


class Home extends React.Component{
    constructor(props){
        super(props)

        this.state={
            choice:""
        }
        this.handleonClickBarber = this.handleonClickBarber.bind(this);
        this.handleonClickSalon = this.handleonClickSalon.bind(this);
        this.signup=this.signup.bind(this)
    }

    handleonClickBarber(event){
        event.preventDefault();
        
        this.setState({choice:"men"}, ()=>{
            let path = `/cuts/${this.state.choice.toLowerCase()}`;
            this.props.history.push(path)
            
        })
    }
    handleonClickSalon(event){
        event.preventDefault();
        this.setState({choice:"women"}, ()=>{

            let path = `/cuts/${this.state.choice.toLowerCase()}`;
            this.props.history.push(path)
        })
        
      }
    
      signup(event){
        event.preventDefault();
        this.props.history.push("/signup")

    }

    render(){
        return(
        <div className="text-center">
            <nav style={{fontFamily:"optima"}} className=" navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="navbar-header">
                <a style={{fontSize:35, fontFamily:"optima", color:"white"}} className="navbar-brand" href="/">ChooseADo</a>

                </div>
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div style={{fontSize:20, fontFamily:"optima"}} className="collapse navbar-collapse justify-content-center" id="navbarText">
                    <ul style={{paddingLeft:30}} className="navbar-nav m-auto">
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
                <span className="navbar-text">
                
                </span>
            </nav>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div style={{border:"solid 4px white"}} className="carousel-inner">
                    <div className="carousel-item">
                    <img height="auto" width="100" src="images/salon.jpeg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item active">
                    <img height="auto" width="100" src="https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img height="auto" width="100" src="https://images.unsplash.com/photo-1573588546512-2ace898aa480?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="">
                <div className="">
                    <div className="">
                        
                    </div>
                
                </div>
            </div>
            <div className="">

            <div className="">

                <div className="">
                    <div style={{textAlign:"center", fontFamily:"optima", color:"gray", fontWeight:"bold", WebkitTextStrokeWidth:2, WebkitTextStrokeColor:"black"}}>
                        <br></br>
                        <h2 style={{fontSize:35}}>Get Started</h2>
                    </div>
                </div>

            </div> 
            <br></br>
            <div style={{fontFamily:"optima"}}>
                <br></br>
                <div style={{height:"20%"}} className="">
                    
                    <div style={{display:"flex", justifyContent:"space-around", marginBottom:20}}>
                        <div className="">
                            <button style={{fontFamily:"optima"}} className="btn btn-outline-dark btn-lg" onClick={this.handleonClickBarber}>His Styles</button>
                        </div>
                        <div style={{display:"flex", justifyContent:"space-around"}}>
                            <button style={{fontFamily:"optima"}} className="btn btn-outline-dark btn-lg" onClick={this.handleonClickSalon}>Her Styles</button>
                        </div>
                    </div>
                    
                </div>
                <br></br>
                
            </div>
            <br></br>
            <div style={{}}>

            </div>
            
            <div style={{paddingTop:20, paddingBottom:20, paddingRight:50, paddingLeft:50, color:"white", fontSize: 25, fontFamily:"optima", textAlign: "center", height:"20%", backgroundColor:"rgb(120, 71, 83)"}}>
                <br></br>
                <p>
                    When you are looking for a haircut what do you normally do?  
                </p>
                <p>
                    Do you Google for stylists near you and then read reviews until your face falls off?
                    
                    It is time for you to be able to search by the haircut or style you are looking for.
                    
                </p>
                   
                <p>
                    Welcome to Choose a Do!
                </p>
                <br></br>
            </div>
            <div style={{marginTop: 20, height:"20%", textAlign:"center", fontFamily:"optima"}}>
                <p style={{margin: 20, WebkitTextStrokeWidth:2, WebkitTextStrokeColor:"black", fontSize:40, color:"gray"}}>How it works</p>
                <div className="container ">
                    <div className="row">

                        <div className="col-md-4">
                            <img style={{border: "white 4px solid", borderRadius:12}} className="w-75 h-auto mx-2" src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
                            <h1 className="my-2 font-weight-bold">Step 1</h1>
                            <p style={{fontSize:20, marginBottom:30, paddingLeft:30, paddingRight:30}}>
                                Choose the do you are looking for today
                            </p>
                        </div>
                        <div className="col-md-4">
                            <img style={{border: "white 4px solid", borderRadius:12}} className="w-75 h-auto mx-2" src="https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                            <h1 className="my-2 font-weight-bold">Step 2</h1>
                            <p style={{fontSize:20, marginBottom:30, paddingLeft:30, paddingRight:30}}>
                                Find a stylist with great reviews close by
                            </p>

                        </div>
                        <div className="col-md-4">
                            <img style={{border: "white 4px solid", borderRadius:12}} className="w-75 h-auto mx-2"src="https://images.unsplash.com/photo-1570101945621-945409a6370f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                            <h1 className="my-2 font-weight-bold">Step 3</h1>
                            <p style={{fontSize:20, marginBottom:30, paddingLeft:30, paddingRight:30}}>
                                Get a do and leave a review for others to see
                            </p>

                        </div>
                    </div>
                </div>
                <br></br>
            </div>

            </div>
            <div style={{height:"20%"}}>
                

            </div>
                
                
                
                
                
            
        </div>
        )
    }
}

export default withRouter(Home);
// this needs a wrapper because history is a prop generated with wrapper