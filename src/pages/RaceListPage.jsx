import RaceInfo from "../components/RaceInfo";
import useFetchList from "../hooks/useFetchList";

const RaceListPage = () => {
    const racesList = useFetchList('races');
    const raceDisplay = racesList.map(raceName => {
        return <RaceInfo index={raceName} />
    })

    return (
        <>
            <h1 className="page-header">Races</h1>
            <div className="custom-list-header">
                {raceDisplay}
            </div>
        </>
    )
}

export default RaceListPage;