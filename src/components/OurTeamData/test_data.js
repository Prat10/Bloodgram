import React from 'react'
import './test_data.css'
export const Test_Data = (props) => {
    return (
        <div className='testmonial_data_set_outer'>
            <div className='testmonial_data_set_content'>
                <div className='testmonial_data_pic'><img src={props.pic} alt="img"></img></div>
                <div className='testmonial_data_review'> <h1> {props.name}</h1>
                    <p>{props.review}</p></div>
            </div>

        </div>
    )
}