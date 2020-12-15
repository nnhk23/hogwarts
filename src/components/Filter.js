import React from "react";

export default class Filter extends React.Component{

    render(){
        return(
            <div>
                <label>All </label>
                <input type="radio" value="all" name='choice' onClick={this.props.handleClick}/>
                <label>Greased </label>
                <input type="radio" value="true" name='choice' onClick={this.props.handleClick}/>
                <label>Ungreased </label>
                <input type="radio" value="false" name='choice' onClick={this.props.handleClick}/>
                
                <div>
                    <label>Sort By: </label>
                    <select onChange={this.props.handleChange}>
                        <option value='name'>Name</option>
                        <option value='weight'>Weight</option>
                    </select>
                </div>
            </div>
        )
    }
}