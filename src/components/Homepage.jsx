import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import games from "../games";

export default function Homepage() {
    useEffect(() => {
        document.title = "ByteSizeArcade";
    });

    function generateCards() {
        return games.map((game) => (
            <div className="border-2 rounded-md flex flex-col bg-transparent/40">
                <h1 className="text-2xl text-center py-2">{game.title}</h1>
                <img src={game.img} alt="" />
                <p className="text-md text-center">{game.description}</p>
                <Link className="mx-auto" to={game.url}>
                    <button className="text-xl border-2 rounded-md px-4 py-2 my-4 bg-blue-600">
                        Play {game.title}
                    </button>
                </Link>
            </div>
        ));
    }

    return (
        <div className="grid grid-cols-1 w-10/12 mx-auto gap-4">
            {generateCards()}
        </div>
    );
}
