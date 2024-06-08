import { useState } from 'React';

export default function Player({playerName, playerSymbol}){
    const [isEditing, setIsEditing] = useState(false);
    function handleClickButton(){
        setIsEditing(true);
    }
    return(
        <li>
            <span className="player">
                {isEditing ? <input type="text" required /> : <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={() => handleClickButton()}>Edit</button>
        </li>
    );
}