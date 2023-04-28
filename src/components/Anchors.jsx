import { Link } from "react-router-dom";

export default function Anchors() {
    return (
        <div className="flex gap-3 items-center me-4">
            <Link to="/sketchbox">
                <a>Sketchbox</a>
            </Link>
            <Link to="/rockpaperscissors">
                <a>RockPaperScissors</a>
            </Link>
            <Link to="/tictactoe">
                <a>TicTacToe</a>
            </Link>
            <Link to="/tenzies">
                <a>Tenzies</a>
            </Link>
            <Link to="/emomemo">
                <a>Emomemo</a>
            </Link>
        </div>
    );
}
