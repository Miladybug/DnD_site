import useFetchInfo from "../../hooks/useFetchInfo";

const AbilityScoreInfo = (props) => {
    const abilityScoreInfo = useFetchInfo('ability-scores', props.index);
    
    let desc_list = "";
    abilityScoreInfo.desc?.map(item => {
        desc_list += `${item} `;
    })

    let skill_list = "";
    abilityScoreInfo.skills?.map(item => {
        skill_list += `${item.name}, `
    })
    skill_list = skill_list.slice(0, -2);

    return (
        <tr>
            <th scope="row">{abilityScoreInfo.name}</th>
            <td>{abilityScoreInfo.full_name}</td>
            <td>{desc_list}</td>
            <td>{skill_list}</td>
        </tr>
    )
}

export default AbilityScoreInfo;