import React from "react";
import HogCard from './HogCard.js'
import HogDetailsCard from "./HogDetailsCard";
import Filter from './Filter.js'

export default class HogsContainer extends React.Component{

    state = {
        display: false,
        hog: '',
        filter: 'all',
        sort: '',
        displayHog: false
    }
    
    unhideComponent = (hog) => {
        this.setState({
            display: !this.state.display,
            hog
        })
    }

    hideIndividualHog = (hog) => {
        alert('hit hide individual')
        this.setState({
            displayHog: true,
            hog
        })
    }

    handleClick = (e) => {
        this.setState({
            filter: e.target.value
        })
    }

    handleChange = (e) => {
        this.setState({
            sort: e.target.value
        })
    }

    renderHogs = () => {
        // sort hogs array by name/weight
        if(this.state.sort === 'name'){
            this.props.hogs.sort((a, b) => (a.name > b.name) ? 1 : -1)
        } else if (this.state.sort === 'weight'){
            this.props.hogs.sort((a, b) => (a.weight > b.weight) ? 1 : -1)
        }

        // display hogs based on radio button
        if(this.state.display){
            return <HogDetailsCard hog={this.state.hog} unhideComponent={this.unhideComponent}/> 
        }else{
            switch(this.state.filter){
                default : 
                    return this.props.hogs.map(hog => <HogCard hog={hog} unhideComponent={this.unhideComponent} />)
                case "true" : 
                    return this.props.hogs.filter(hog => (hog.greased === true)).map(hog => <HogCard hog={hog} unhideComponent={this.unhideComponent} />)
                case "false" :
                    return this.props.hogs.filter(hog => (hog.greased === false)).map(hog => <HogCard hog={hog} unhideComponent={this.unhideComponent} />)
            }
        }
    }


    render() {
        return(
            <div>
                <Filter handleClick={this.handleClick} handleChange={this.handleChange}/>
                {this.renderHogs()}
            </div>
        )
    }
}