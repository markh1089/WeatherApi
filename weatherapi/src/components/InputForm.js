import React from 'react'

const InputForm = (props) => {
    return (
        <div>
            <form onSubmit={props.getWeather}>
                <input type='text' name='city' placeholder='type a city here'></input>
                <button>Get Weather</button>
            </form>
            
        </div>
    )
}



export default InputForm

