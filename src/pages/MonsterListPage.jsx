import MonsterInfo from "../components/MonsterInfo";
import useFetchList from "../hooks/useFetchList";

const MonsterListPage = () => {
    const monsterList = useFetchList('monsters');
    const monsterDisplay = monsterList.map(monsterName => {
        return <MonsterInfo index={monsterName} />
    })

    return (
        <>
            <h1 className="page-header">Monster List</h1>
            <div className="custom-list-header">
                {monsterDisplay}
            </div>
        </>
    )
}

export default MonsterListPage;