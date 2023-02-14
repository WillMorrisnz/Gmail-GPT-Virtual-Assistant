import * as React from 'react';
import Login from './Login';
import ProfileImage from './ProfileImage';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Login />
      <ProfileImage />
    </div>
  );
}
