import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  const handleEditChange = () => {
    // setIsEditing(isEditing ? false : true);
    setIsEditing((editing) => !editing);
  };
  // console.log(isEditing);

  const handleChange = (e) => {
    console.log(e);
    setPlayerName(e.target.value);
  };
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            className="player-name"
            required
            value={playerName}
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditChange}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
