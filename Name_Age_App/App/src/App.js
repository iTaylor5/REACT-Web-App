import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';
// import './App.css';
//import UserList from './components/UserList/UserList';

function App() {

  const [usersList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  }

  return (
    <div>
      <div>
        <AddUser onAddUser={addUserHandler} />
        <UsersList users={usersList} />
      </div>
      <section id="goals">

      </section>
    </div>
  );
}

export default App;