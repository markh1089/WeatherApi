import React from 'react'

const InputForm = ({location, updateLocation}) => {
    return (
        <div>
            <h1>{location}</h1>
            <form>
                <input type='text' name='city' placeholder='type a city here' onChange={event => updateLocation(event.target.value)}></input>
            </form>
            
        </div>
    )
}



export default InputForm

