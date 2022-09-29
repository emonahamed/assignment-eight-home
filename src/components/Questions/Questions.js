import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='question-container'>
            <p> <strong>1.How does react work ?</strong> </p>
            <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.</p>

            <p> <strong>2.What is the difference between props and state?</strong> </p>
            <p>Props:The Data is passed from one component to another and It is Immutable (cannot be modified). <br />
                State: IN state The Data is passed within the component only and It is Mutable ( can be modified).
            </p>

            <p> <strong>3.For which purposes useEffect is used?</strong> </p>
            <p>useEffect use cases: <br />
                1. Running once on mount: fetch API data <br />
                2.Running on state change: validating input field <br />
                3.Running on state change: live filtering <br />
                4.Running on state change: trigger animation on new array value <br />
                5.Running on props change: update paragraph list on fetched API data update <br />
                6.Running on props change: updating fetched API data to get BTC updated price <br />
            </p>

        </div>
    );
};

export default Questions;