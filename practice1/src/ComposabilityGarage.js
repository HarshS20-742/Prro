import React from 'react'
import Car from './Constructor'
export class Garage extends React.Component{
    render(){
       return(
        <div>
            <h1>This Garage has: </h1>
            <Car/>
        </div>
       )
    }
}
export default Garage