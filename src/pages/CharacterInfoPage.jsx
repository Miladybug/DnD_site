import AbilityScoreInfo from "../components/CharacterData/AbilityScoreInfo";
import AlignmentInfo from "../components/CharacterData/AlignmentInfo";
import SkillInfo from "../components/CharacterData/SkillInfo";
import useFetchList from "../hooks/useFetchList"

const CharacterInfoPage = () => {
    const abilityList = useFetchList('ability-scores');
    const abilityDisplay = abilityList.map(abilityName => {
        return <AbilityScoreInfo index={abilityName} />
    })

    const alignmentList = useFetchList('alignments');
    const alignmentDisplay = alignmentList.map(alignmentName => {
        return <AlignmentInfo index={alignmentName} />
    })


    const skillsList = useFetchList('skills');
    const skillDisplay = skillsList.map(skillName => {
        return <SkillInfo index={skillName} />
    })

    return(
        <>
            <h1 className="page-header">Character Info Tables</h1>
            <div className="card full-card">
                <h3 className="custom-card-header text-primary">Ability Scores</h3>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="row">Name</th>
                            <th>Full Name</th>
                            <th>Description</th>
                            <th>skills</th>
                        </tr>
                    </thead>
                    <tbody>
                        {abilityDisplay}
                    </tbody>
                </table>
            </div>
            <div className="card full-card">
                <h3 className="custom-card-header text-primary">Alginments</h3>
                <table className="table table-striped table-bordered">
                    <thead>
                        <th scope="row">Name</th>
                        <th>Description</th>
                    </thead>
                    <tbody>
                        {alignmentDisplay}
                    </tbody>
                </table>
            </div>
            <div className="card full-card">
                <h3 className="custom-card-header text-primary">Skills</h3>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="row">Name</th>
                            <th>Ability Score</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {skillDisplay}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CharacterInfoPage