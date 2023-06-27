import React, { useState } from 'react';
import ReactiveButton from 'reactive-button';

function Button({ navigating }) {
    const [state, setState] = useState('idle');

    const onClickHandler = () => {
        setState('Loading');
        setTimeout(() => {
            setState('success');
        }, 5000);
    }

    return (
        <ReactiveButton
            style={{
                borderRadius: '0.5rem',
                color: 'white',
                backgroundColor: 'maroon',
            }}
            type={'submit'} idleText="Check Blood"
            buttonState={state}
            onClick={navigating}
            color="red"
            loadingText="Searching"
            successText="Done"
            errorText="No find"
            animation={true}
        />
    );
}

export default Button;