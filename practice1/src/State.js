import React from "react";
class Student extends React.Component{
    constructor(props){
        super(props)
        this.state={name:'',FeesPaid:true,color:"red"}


    }
    myfunction =()=>{
            this.state=this.setState({})
    }


    render(){
        return(
            <div>
                <label>First Name: </label>
                <input type='text' value={this.props.name}/>
                <br/>
                <label>FeesPaid:</label>
                <input type="checkbox" onClick={this.myfunction} value={this.props.FeesPaid}/>
            </div>
        )
    }
}
export default Student