import useFetchList from "../../hooks/useFetchList";
import RaceInfo from "../RaceInfo";

const RaceChoice = ({ onChooseRace }) => {
    const RaceList = useFetchList('races');

    const selectHandler = (index, event) => {
        onChooseRace(index.raceName);
    }

    const raceDisplay = RaceList.map(raceName => {
        return (
            <div className="d-flex flex-column justify-content-center">
                <RaceInfo index={raceName} />
                <button type="button" className="btn btn-light" onClick={event => selectHandler({raceName}, event)}>Select</button>
            </div>
        )
    })

    return (
        <>
            <h3 className="page-header">Choose a Race</h3>
            <div className="custom-list-header">
                {raceDisplay}
            </div>
        </>
    )
}

export default RaceChoice;