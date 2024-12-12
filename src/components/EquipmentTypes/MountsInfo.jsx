import useFetchInfo from "../../hooks/useFetchInfo";

const MountsInfo = (props) => {
    const equipmentInfo = useFetchInfo('equipment', props.index);
    if (equipmentInfo.equipment_category?.index != 'mounts-and-vehicles'){
        return;
    }

    return (
        <tr>
            <th scope="row">{equipmentInfo.name}</th>
            <td>{equipmentInfo.equipment_category?.name}</td>
            <td>{equipmentInfo.vehicle_category}</td>
            <td>{equipmentInfo.cost?.quantity} {equipmentInfo.cost?.unit}</td>
            <td>{equipmentInfo.weight}</td>
        </tr>
    )
}

export default MountsInfo;