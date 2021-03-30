import React from 'react';

function SessionLength(props){

    function increaseCounterSession(){
        if (props.sessionLength === 60) {
            return;
        }

        props.increaseSession();
        

    }

    function decreaseCounterSession() {
        if (props.sessionLength === 1) {
            return;
        }

        props.decreaseSession();
    }




    return (
        <section>
            <h4>Session Length</h4>
            <section className="interval-container">

                <button disabled={props.isPlay == true ? "disabled" : ""} onClick={decreaseCounterSession}>Down</button>
                <p className="interval-length">{props.sessionLength}</p>
                <button disabled={props.isPlay == true ? "disabled" : ""} onClick={increaseCounterSession}>Up</button>

            </section>
        </section>

    )
}

export default SessionLength;