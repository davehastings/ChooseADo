import React from "react";
import {withRouter} from "react-router-dom";


class HairDresser extends React.Component{
  constructor(props){
      super(props)


      
     
    this.handleOnClick = this.handleOnClick.bind(this);
  }


  handleOnClick(event){
    event.preventDefault();
    
    let path = `/stylist/${this.props.id}`;
    this.props.history.push(path);//history is the monitoring of the router

  }

  render(){
      return(
        <li style={{backgroundColor:"lightgray"}} className="list-group-item rounded-lg">

                 
            <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                <div >
                  <img alt="" src={this.props.image} className="img-thumbnail" style={{borderRadius: 12, border:"solid 2px gray", width:150, height:"auto", marginLeft:10, marginTop:10, flex:"start", marginBottom:10}}/>
                  <div  className="" style={{fontSize:20, color:"gray", WebkitTextStrokeWidth:1, WebkitTextStrokeColor:"black", fontFamily:"optima"}}>
                    {this.props.name}
                  </div>
                </div>
                <div className="d-none d-md-block" style={{color:"gray", fontSize:17, fontFamily:"optima", WebkitTextStrokeWidth:1, WebkitTextStrokeColor:"black"}}>
                  {this.props.description}
                </div>
                <div>
                  <button className="btn btn-outline-dark btn-lg" style={{marginLeft:10, fontFamily:"optima", fontSize:15}} onClick={this.handleOnClick}>See Profile</button>
                </div>
            </div>
       
        
        </li>
      )
  }


}

export default withRouter(HairDresser);