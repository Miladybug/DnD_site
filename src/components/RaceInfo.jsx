import { useEffect, useState } from "react";

const RaceInfo = (props) => {
    const [raceInfo, setRaceInfo] = useState([]);

    useEffect(() => {
        const fetchRaceInfo = async () => {
            const response = await fetch(`https://www.dnd5eapi.co/api/races/${props.index}`);

            if (!response.ok){
                throw new Error("Something went wrong!");
            }

            const responseData = await response.json();

            setRaceInfo({
                index: responseData.index,
                name: responseData.name,
                speed: responseData.speed,
                ability_bonuses: responseData.ability_bonuses,
                alignment: responseData.alignment,
                age: responseData.age,
                size: responseData.size,
                size_description: responseData.size_description,
                starting_proficiencies: responseData.starting_proficiencies,
                starting_proficiency_options: responseData.starting_proficiency_options,
                languages: responseData.languages,
                language_desc: responseData.language_desc,
                traits: responseData.traits,
                subraces: responseData.subraces
            })
        }

        fetchRaceInfo();
    })

    let ability_bonus_list = "";
    raceInfo.ability_bonuses?.map(item => {
        ability_bonus_list += `${item.ability_score.name}: ${item.bonus}, `;
    })
    ability_bonus_list = ability_bonus_list.slice(0, -2);

    let proficiencies_list = "";
    if (raceInfo.starting_proficiencies){
        raceInfo.starting_proficiencies?.map(item => {
            proficiencies_list += `${item.name}, `
        })
    }
    if (raceInfo.starting_proficiency_options){
        proficiencies_list += raceInfo.starting_proficiency_options.desc;
    } else {
        proficiencies_list = proficiencies_list.slice(0, -2);
    }
    if (!proficiencies_list){
        proficiencies_list = "None"
    }
    

    let traits_list = "";
    raceInfo.traits?.map(item => {
        traits_list += `${item.name}, `
    })
    traits_list = traits_list.slice(0, -2);

    return (
        <div className="card custom-card-div">
            <h2 className="text-primary custom-card-header">{raceInfo.name}</h2>
            <table className="table table-striped table-bordered">
                <tbody>
                    <tr>
                        <th scope="row">Ability Bonuses</th>
                        <td>{ability_bonus_list}</td>
                    </tr>
                    <tr>
                        <th scope="row">Alignment</th>
                        <td>{raceInfo.alignment}</td>
                    </tr>
                    <tr>
                        <th scope="row">Age</th>
                        <td>{raceInfo.age}</td>
                    </tr>
                    <tr>
                        <th scope="row">Size</th>
                        <td>{raceInfo.size}: {raceInfo.size_description}</td>
                    </tr>
                    <tr>
                        <th scope="row">Starting Proficiencies</th>
                        <td>{proficiencies_list}</td>
                    </tr>
                    <tr>
                        <th scope="row">Languages</th>
                        <td>{raceInfo.language_desc}</td>
                    </tr>
                    <tr>
                        <th scope="row">Traits</th>
                        <td>{traits_list}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RaceInfo;