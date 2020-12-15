import React from "react";
import HogDetailsCard from "./HogDetailsCard";

export default class HogCard extends React.Component{

    handleClick = () => {
        this.props.unhideComponent(this.props.hog)
        return <HogDetailsCard />
    }

    hideHog = (e) => {
        e.target.parentNode.style = 'display:none'
    }

    render() {
        return(
            <div className='pigTile' id='hogCard'>
                <h1 onClick={this.handleClick}>
                    {this.props.hog.name}
                </h1>
                <button onClick={this.hideHog}>Hide Hog</button>
            </div>
        )
    }
}