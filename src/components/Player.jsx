import { useState } from 'React';

export default function Player({initialName, playerSymbol}){
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);
    function handleClickButton(){
        setIsEditing((editing) => !editing);
    }
    function handleChangeInput(event){
        setPlayerName(event.target.value);
    }
    return(
        <li>
            <span className="player">
                {isEditing ? <input type="text" required value={playerName} onChange={handleChangeInput} /> : <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={() => handleClickButton()}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}