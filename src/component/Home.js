import React from 'react';

const Home = ({ user }) => {
  if (!user) {
    return (
      <div className="container mt-4">
        <div className="alert alert-warning" role="alert">
          Loading... Please fill the form
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="user-info">
        <h2 className="welcome-msg">Welcome, {user.name || 'Guest'}!</h2>
        <div className="user-details">
          <p className="user-detail">Age: {user.age}</p>
          <p className="user-detail">Email: {user.email}</p>
          <p className="user-detail">Address: {user.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
