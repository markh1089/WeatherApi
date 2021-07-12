import React, { Component } from 'react'


class WeekContainer extends Component {
    
    render() {

        const api= process.env.WEATHER_API;
        console.log(api)
        
        return (
            <div>
                <h1> Hello World</h1>
                
            </div>
        )
    }
}

export default WeekContainer
