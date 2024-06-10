import { useState } from 'React';

export default function Player({initialName, playerSymbol, isActive, onChangeName}){
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);
    function handleClickButton(){
        setIsEditing((editing) => !editing);
        if(isEditing){
            onChangeName(playerName, playerSymbol);
        }
    }
    function handleChangeInput(event){
        setPlayerName(event.target.value);
    }
    return(
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {isEditing ? <input type="text" required value={playerName} onChange={handleChangeInput} /> : <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={() => handleClickButton()}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}