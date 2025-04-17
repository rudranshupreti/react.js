import React from 'react'

const EventProps = () => {
  const handleWelcomeUser = (name) => {
    alert(`Welcome ${name}`);
  };

  const handleHover = () => {
    alert("Welcome to the hover event");
  };

  return (
    <>
      <WelcomeUser
        onClick={() => handleWelcomeUser("Rudra")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = ({ onClick, onMouseEnter }) => {
  return (
    <div>
      <button onClick={onClick} onMouseEnter={onMouseEnter}>
        Welcome User
      </button>
    </div>
  );
};

export default EventProps;
