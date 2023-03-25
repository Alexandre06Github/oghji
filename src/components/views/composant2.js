import React from 'react';


function Component2(props) {
  const { name, icon, onClick } = props;
  // `name` est le nom de la pièce, `icon` est l'icône à afficher sur le bouton, `onClick` est la fonction à appeler lorsque le bouton est cliqué.

  return (
    <button className="room-button" onClick={onClick}>
      <div className="room-icon">{icon}</div>
      <div className="room-name">{name}</div>
    </button>
  );
}

export default Component2;