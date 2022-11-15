import React, { useReducer, useEffect, useState, useRef } from "react";

const reducer = (state, action) => {
    switch (action) {
        case "add":
            return { count: state.count + 1, text: "Incremented", isVisible: true };
        case "subtract":
            return { count: state.count - 1, text: "Decremented", isVisible: true };
        case "reset":
            return { count: 0, text: "Reset", isVisible: true };
        case "hide":
            return { ...state, isVisible: false }
        default:
            throw new Error("Unexpected action");
    }
};

export const ReduceExample = () => {
    
    const [state, dispatch] = useReducer(reducer, { count: 0, text: " ", isVisible: false }); //we can add more variables here to the state
    //const[previousCounter, setPreviousCounter]= useState("");

    const previousCounter= useRef();

    useEffect(()=>{
        setTimeout( ()=>{
            dispatch("hide");
        }, 1000);
    }, [state.count]);

    const updateCounter = (action) =>{
        //setPreviousCounter(state.count);
        previousCounter.current= state.count;
        dispatch(action);
        // setTimeout(() => {
        //     dispatch("hide")
        // }, 1000);
    }

    return (
        <div>
            <h2>{state.count}</h2>
            <h2>{previousCounter.current}</h2>
            <h6>{state.isVisible && state.text}</h6>
            <button onClick={() => updateCounter('add')}>
                add
            </button>
            <button onClick={() => updateCounter("subtract")}>
                subtract
            </button>
            <button onClick={() => updateCounter("reset")}>
                reset
            </button>
        </div>
    );
};

