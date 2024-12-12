import useFetchInfo from "../../hooks/useFetchInfo";

const SkillInfo = (props => {
    const skillInfo = useFetchInfo('skills', props.index);

    return (
        <tr>
            <th scope="row">{skillInfo.name}</th>
            <td>{skillInfo.ability_score?.name}</td>
            <td>{skillInfo.desc}</td>
        </tr>
    )

})

export default SkillInfo;