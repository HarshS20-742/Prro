import React from 'react'
class Car extends React.Component{
    constructor()
    {
        super()
        this.state={name:'Creta',color:'orange'}
    }
    render()
    {
        return(<h1><font color={this.state.color}>Car name: {this.state.name}</font></h1>)
    }
}
export default Car