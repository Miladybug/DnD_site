import SpellInfo from "../components/SpellInfo";
import useFetchList from "../hooks/useFetchList";

const SpellListPage = () => {
    const spellsList = useFetchList('spells');
    const spellDisplay = spellsList.map(spellName => {
        return <SpellInfo index={spellName} />
    })

    return (
        <>
            <h1 className="page-header">Spells</h1>
            <div className="custom-list-header">
                {spellDisplay}
            </div>
        </>
    )
}

export default SpellListPage;