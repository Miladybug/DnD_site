import useFetchInfo from "../../hooks/useFetchInfo";

const AdventuringInfo = (props) => {
    const equipmentInfo = useFetchInfo('equipment', props.index);
    if (equipmentInfo.equipment_category?.index != 'adventuring-gear'){
        return;
    }

    return (
        <tr>
            <th scope="row">{equipmentInfo.name}</th>
            <td>{equipmentInfo.equipment_category?.name}</td>
            <td>{equipmentInfo.gear_category?.name}</td>
            <td>{equipmentInfo.cost?.quantity} {equipmentInfo.cost?.unit}</td>
            <td>{equipmentInfo.weight}</td>
        </tr>
    )


}

export default AdventuringInfo;