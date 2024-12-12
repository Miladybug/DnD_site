import { useState } from "react";
import ClassChoice from "../components/CharacterCreation/ClassChoice";
import RaceChoice from "../components/CharacterCreation/RaceChoice";

const CharacterCreationPage = () => {
    const [creationPhase, setCreationPhase] = useState("class");
    
    const [chosenClass, setChosenClass] = useState("");
    const chooseClass = (className) => {
        setChosenClass(className);
        setCreationPhase("race");
    }    

    const [chosenRace, setChosenRace] = useState("");
    const chooseRace = (raceName) => {
        setChosenRace(raceName);
        setCreationPhase("next");
    }

    return (
        <>
            <h1 className="page-header">Create a Character</h1>
            {creationPhase === "class" && <ClassChoice onChooseClass={chooseClass} />}
            {creationPhase === "race" && <RaceChoice onChooseRace={chooseRace} />}
            {creationPhase === "next" && <p className="text-light">{chosenClass} - {chosenRace}</p>}
        </>
    )
}

export default CharacterCreationPage;