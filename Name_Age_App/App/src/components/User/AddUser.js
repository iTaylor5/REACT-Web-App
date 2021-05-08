import React, { useState } from 'react';

import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {


    const [enteredUsername, setEnteredUsername] = useState("");
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const [enteredAge, setEnteredAge] = useState("");

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const addUserHandler = event => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({ title: 'Invalid input', massage: 'Please enter a valid name and age (> 0).' });
            return;
        }

        if (+enteredAge < 1) {
            setError({ title: 'Invalid age', massage: 'Please enter a valid age (non-empty values).' });
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        //console.log("Name: " + enteredUsername + " Age: " + enteredAge);
        setEnteredUsername("");
        setEnteredAge("");
    };

    const [error, setError] = useState();

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">User Name</label>
                    <input type="text" id="username" onChange={usernameChangeHandler} value={enteredUsername} />

                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" onChange={ageChangeHandler} value={enteredAge} />

                    <Button type="submit">Add User</Button>
                </form >
            </Card>
        </div >


    );
}

// The button class wraps the basic HTML functionalty enabling us to use it as a normal button with extra visual effects.

export default AddUser;