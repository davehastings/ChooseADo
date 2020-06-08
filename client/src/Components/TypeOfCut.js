import React from "react";
import {withRouter} from "react-router-dom";


class TypeOfCut extends React.Component{
  constructor(props){
      super(props)
      
      this.state={

      }
     
  }

  handleOnClick(){
    let path = `/cuts/${this.props.sex}/${this.props.title.toLowerCase()}`;
    this.props.history.push(path);//history is the monitoring of the router
  }

  render(){
      
      return(
        <li style={{backgroundColor:"lightgray"}} className="list-group-item rounded-lg">

          
            <div style={{display:"flex", flexDirection:"row", alignItems: "center", justifyContent:"space-between"}}>
              
              <div >
                <img alt="" className="img-thumbnail" style={{borderRadius:12,border:"solid 2px gray", width:150, height:"auto", marginLeft:10, marginTop:10, flex:"start", marginBottom:10}} src={this.props.image}/>
                <div  className="d-xs-block d-md-none" style={{fontSize:20, color:"gray", WebkitTextStrokeWidth:1, WebkitTextStrokeColor:"black", fontFamily:"optima"}}>
                    {this.props.title}
                </div>
              </div>
              <div className="d-none d-md-block" style={{fontSize:30, color:"gray", fontWeight:"bold", fontFamily:"optima", WebkitTextStrokeWidth:1, WebkitTextStrokeColor:"black"}}>
                {this.props.title}
              </div>
              
              <button  className="btn btn-outline-dark btn-lg" style={{marginLeft:20, fontFamily:"optima", fontSize:15}} onClick={this.handleOnClick.bind(this)}>See Stylists</button>
              
            </div>
          
          
        </li>
      )
  }


}

export default withRouter(TypeOfCut); // this is a wrapper