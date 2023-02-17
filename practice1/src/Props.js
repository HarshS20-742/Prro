import React from 'react'
class Student extends React.Component{
    render()
    {
        return(
            <div>

                <h1>Rollno: {this.props.rollno}</h1>
                <h1>Name: {this.props.name}</h1>
                <h1>Class: {this.props.cl}</h1>
            </div>
        )
    }
}
export default Student