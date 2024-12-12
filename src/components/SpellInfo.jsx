import { useEffect, useState } from "react";

const SpellInfo = (props) => {
    const [spellInfo, setSpellInfo] = useState([]);

    useEffect(() => {
        const fetchSpellInfo = async () => {
            const response = await fetch(`https://www.dnd5eapi.co/api/spells/${props.index}`);

            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const responseData = await response.json();

            setSpellInfo({
                index: responseData.index,
                name: responseData.name,
                desc: responseData.desc,
                higher_level: responseData.higher_level,
                range: responseData.range,
                components: responseData.components,
                material: responseData.material,
                ritual: responseData.ritual,
                duration: responseData.duration,
                concentration: responseData.concentration,
                casting_time: responseData.casting_time,
                level: responseData.level,
                damage: responseData.damage,
                dc: responseData.dc,
                area_of_effect: responseData.area_of_effect,
                school: responseData.school,
                classes: responseData.classes,
                subclasses: responseData.subclasses
            })
        }

        fetchSpellInfo();
    })

    let classes_list = "";
    spellInfo.classes?.map(item => {
        classes_list += `${item.name}, `
    })
    classes_list = classes_list.slice(0, -2);

    let components_list = "";
    spellInfo.components?.map(item => {
        components_list += `${item}, `
    })
    components_list = components_list.slice(0, -2)

    return (
        <div className="card custom-card-div">
            <h2 className="text-primary custom-card-header">{spellInfo.name}</h2>
            <p><i>Level {spellInfo.level} {spellInfo.school?.name} ({classes_list})</i></p>
            <ul>
                <li><strong>Casting Time: </strong> {spellInfo.casting_time}</li>
                <li><strong>Range: </strong> {spellInfo.range}</li>
                <li><strong>Components: </strong> {components_list}</li>
                <li><strong>Duration: </strong> {spellInfo.duration}</li>
            </ul>
            <p>{spellInfo.desc}</p>
            {spellInfo.higher_level?.length > 0 ? 
                <p><strong><em>Using a Higher-Level spell Slot:</em></strong> {spellInfo.higher_level}</p>
                : <></>
            }
            
        </div>
    )
}

export default SpellInfo;