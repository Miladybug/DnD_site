import useFetchInfo from "../../hooks/useFetchInfo";

const ArmorInfo = (props) => {
    const armorInfo = useFetchInfo("equipment", props.index);
    if (armorInfo.equipment_category?.index !== "armor"){
        return;
    }

    let propertiesList = "";
    armorInfo.properties?.map(item => {
        propertiesList += `${item.name}, `;
    })
    propertiesList = propertiesList.slice(0, -2);

    return (
        <tr>
            <th scope="row">{armorInfo.name}</th>
            <td>{armorInfo.armor_category}</td>
            <td>{armorInfo.armor_class?.base}</td>
            <td>{armorInfo.str_minimum}</td>
            <td>{String(armorInfo.stealth_disadvantage)}</td>
            <td>{armorInfo.weight}</td>
            <td>{armorInfo.cost?.quantity} {armorInfo.cost?.unit}</td>
        </tr>
    )
}

export default ArmorInfo;