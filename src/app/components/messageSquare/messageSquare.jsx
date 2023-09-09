import React from 'react';

const MessageSquare = ({ text, photo }) => {
  return (
    <div
      style={{
        width: '920px',
        height: '74px',
        backgroundColor: '#E5E1E6',
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        borderRadius: '10px',
        marginBottom: '-50px'
      }}
    >
      <img
        src={photo}
        alt="mulher"
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          marginRight: '10px'
        }}
      />
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginRight: '10px',
        }}
      >
        <span style={{ fontSize: '12px' }}>{text}</span>
      </div>
      <img
        src="lixeira.png"
        alt="Lixeira"
        style={{
          width: '20px',
          height: '20px',
          cursor: 'pointer',
        }}
      />
    </div>
  );
};

export default MessageSquare;