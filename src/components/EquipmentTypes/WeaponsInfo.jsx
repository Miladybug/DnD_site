import useFetchInfo from "../../hooks/useFetchInfo";

const WeaponsInfo = (props) => {
    const weaponInfo = useFetchInfo("equipment", props.index)
    if (weaponInfo.equipment_category?.index !== "weapon"){
        return;
    }

    let propertiesList = "";
    weaponInfo.properties?.map(item => {
        propertiesList += `${item.name}, `;
    })
    propertiesList = propertiesList.slice(0, -2);

    return (
        <tr>
            <th scope="row">{weaponInfo.name}</th>
            <td>{weaponInfo.category_range}</td>
            <td>{weaponInfo.cost?.quantity} {weaponInfo.cost?.unit}</td>
            <td>{weaponInfo.damage?.damage_dice} {weaponInfo.damage?.damage_type?.name}</td>
            <td>{weaponInfo.range?.normal}</td>
            <td>{weaponInfo.weight}</td>
            <td>{propertiesList}</td>
        </tr>
    )
}

export default WeaponsInfo;