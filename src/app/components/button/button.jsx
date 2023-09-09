import React from 'react';

const ButtonComponent = () => {
  return (
    <button
      style={{
        backgroundColor: '#00875F',
        color: 'white',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        width: '130px',
        height: '60px',
        fontSize: '16px',
        fontWeight: 'bold', 
      }}
    >Publicar</button>
  );
};

export default ButtonComponent;