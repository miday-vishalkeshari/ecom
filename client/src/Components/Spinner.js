import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Spinner = ({path="login"}) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => prevValue - 1);
    }, 1000);

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, []); // Use an empty dependency array, as you don't need to re-run this effect

  useEffect(() => {
    if (count === 0) {
      navigate(`/${path}`, {
        state: { from: location.pathname }, // Updated state object
      });
    }
  }, [count, navigate, location,path]);

  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h1 className="text-center">Redirecting to you in {count} seconds</h1>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
