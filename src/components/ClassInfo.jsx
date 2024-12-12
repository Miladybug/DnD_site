import { useEffect, useState } from "react";

const ClassInfo = (props) => {
    const [classInfo, setClassInfo] = useState([]);

    useEffect(() => {
        const fetchClassInfo = async () => {
            const response = await fetch(`https://www.dnd5eapi.co/api/classes/${props.index}`);
            
            if (!response.ok) {
                console.log("ERROR")
                throw new Error("Something went wrong!");
            }
            const responseData = await response.json();
            setClassInfo({
                index: responseData.index,
                name: responseData.name,
                hit_die: responseData.hit_die,
                proficiencies: responseData.proficiencies,
                proficiency_choices: responseData.proficiency_choices,
                saving_throws: responseData.saving_throws,
                starting_equipment: responseData.starting_equipment,
                starting_equipment_options: responseData.starting_equipment_options,
                subclasses: responseData.subclasses
            })
        }

        fetchClassInfo();
    }, [])

    if (!classInfo.proficiency_choices?.length > 0){
        return <p>Loading...</p>
    }

    let saving_throws_list = "";
    classInfo.saving_throws?.map(item => {
        saving_throws_list +=`${item.name}, `;
    })
    saving_throws_list = saving_throws_list.slice(0, -2);

    classInfo.proficiencies?.pop();
    let proficiencies_list = "";
    classInfo.proficiencies?.map(item => {
        proficiencies_list += `${item.name}, `
    })
    proficiencies_list = proficiencies_list.slice(0, -2)

    let starting_equipment_list = "";
    classInfo.starting_equipment?.map(item => {
        starting_equipment_list += `${item.equipment.name} (${item.quantity}), `
    })
    classInfo.starting_equipment_options?.map(item => {
        starting_equipment_list += `${item.desc}, `
    })
    starting_equipment_list = starting_equipment_list.slice(0, -2);

    let subclass_list = "";
    classInfo.subclasses?.map(item => {
        subclass_list += `${item.name}, `
    })
    subclass_list = subclass_list.slice(0, -2);
    
    return (
        <div className="card custom-card-div">
            <h2 className="text-primary custom-card-header">{classInfo.name}</h2>
            <table className="table table-striped table-bordered">
                <tbody>
                    <tr>
                        <th scope="row">Hit Point Die</th>
                        <td>D{classInfo.hit_die} per {classInfo.name} level</td>
                    </tr>
                    <tr>
                        <th scope="row">Saving Throw Proficiencies</th>
                        <td>{saving_throws_list}</td>
                    </tr>
                    <tr>
                        <th scope="row">Skill Proficiencies</th>
                        <td>
                            {classInfo.proficiency_choices[0]?.desc}
                            {classInfo.proficiency_choices[1]?
                                <span> PLUS {classInfo.proficiency_choices[1]?.desc}</span>
                                : <></>
                            }
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Weapon and Armer Proficiencies</th>
                        <td>{proficiencies_list}</td>
                    </tr>
                    <tr>
                        <th scope="row">Starting Equipment</th>
                        <td>{starting_equipment_list}</td>
                    </tr>
                    {/* <tr>
                        <th scope="row">Subclasses</th>
                        <td>{subclass_list}</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default ClassInfo;