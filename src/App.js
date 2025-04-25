import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import UserForm from './components/userform';
import UserList from './components/userlist';
import FetchUser from './components/Fetchuser';

function App() {
  return (
    <Provider configureStore={configureStore}>
      <div className="App">
        <h1>User Management</h1>
        <UserForm />
        <FetchUser />
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
