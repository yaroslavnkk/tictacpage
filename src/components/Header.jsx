export default function Header({image}){
    return(
        <header>
            <img src={image} alt='Game logo'></img>
            <h1>Tic-Tac-Toe</h1>
        </header>
    );
}