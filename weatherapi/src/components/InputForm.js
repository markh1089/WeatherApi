import React from 'react'

const InputForm = ({location, updateLocation,london,leeds,manchester, sheffield}) => {
    return (
        <div>
            <h1>{location}, UK</h1>
            {/* <form>
                <input type='text' name='city' placeholder='type a city here' onChange={event => updateLocation(event.target.value)}></input>
            </form> */}
            <button onClick={london}>London</button>
            <button onClick={leeds}>Leeds</button>
            <button onClick={sheffield}>Sheffield</button>
            <button onClick={manchester}>Manchester</button>
        </div>
    )
}



export default InputForm

