import React from "react";

export default class HogsDetailsCard extends React.Component{

    handeClick = () => {
        this.props.unhideComponent()
    }

    render() {
        // console.log('props of hog details', this.props)
        const {name, specialty, weight} = this.props.hog
        return(
            <div className='pigTile'>
                <h1> Name: {name} </h1>
                <p> Specialty: {specialty} </p>
                <p> Greased: {this.props.hog.grased ? 'Yes' : 'No'} </p>
                <p> Weight: {weight} </p>
                <p> Highest Medal Achieved: {this.props.hog['highest medal achieved']} </p>
                <button onClick={this.handeClick}>Back to All Hogs</button>
            </div>
        )
    }
}