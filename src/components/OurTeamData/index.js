import React from 'react'
import './Cards.css'
const Cards = (props) => {
    const { card } = props;
    return (
        <div className='card-main'>
            <div className='c-inner-wrapper'>
                <div className='c-content'>
                    <img alt={card.user_name} src={card.user_photo} className='c-banner' />
                    <div className='c-userinfo'>
                        <div className='c-ui-left'>
                            <div className='c-name-colors'>{card.user_name}</div>
                            <div>{card.userhandle}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;