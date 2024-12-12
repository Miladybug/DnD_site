import { useEffect, useState } from "react";

const MonsterInfo = (props) => {
    const [monsterInfo, setMonsterInfo] = useState([]);

    useEffect(() => {
        const fetchMonsterInfo = async () => {
            const response = await fetch(`http://www.dnd5eapi.co/api/monsters/${props.index}`);
            if (!response.ok){
                throw new Error("Something went wrong!");
            }

            const responseData = await response.json();

            setMonsterInfo({
                index: responseData.index,
                name: responseData.name,
                size: responseData.size,
                type: responseData.type,
                alignment: responseData.alignment,
                armor_class: responseData.armor_class,
                hit_points: responseData.hit_points,
                hit_dice: responseData.hit_dice,
                hit_points_roll: responseData.hit_points_roll,
                speed: responseData.speed,
                strength: responseData.strength,
                dexterity: responseData.dexterity,
                constitution: responseData.constitution,
                intellegence: responseData.intellegence,
                wisdom: responseData.wisdom,
                charisma: responseData.charisma,
                proficiencies: responseData.proficiencies,
                damage_vulnerabilities: responseData.damage_vulnerabilities,
                damage_resistances: responseData.damage_resistances,
                damage_immunities: responseData.damage_immunities,
                condition_immunities: responseData.condition_immunities,
                senses: responseData.senses,
                languages: responseData.languages,
                challenge_rating: responseData.challenge_rating,
                proficiency_bonus: responseData.proficiency_bonus,
                xp: responseData.xp,
                special_abilities: responseData.special_abilities,
                actions: responseData.actions,
                legendary_actions: responseData.legendary_actions
            })
        }

        fetchMonsterInfo();
    })

    return (
        <div className="card custom-card-div">
            <h2 className="text-primary custom-card-header">{monsterInfo.name}</h2>
            <table className="table table-striped table-bordered">
                <tbody>
                    <tr>
                        <th scope="row">Size</th>
                        <td>{monsterInfo.size}</td>
                    </tr>
                    <tr>
                        <th scope="row">Type</th>
                        <td>{monsterInfo.type}</td>
                    </tr>
                    <tr>
                        <th scope="row">Hit Points</th>
                        <td>{monsterInfo.hit_points}</td>
                    </tr>
                    <tr>
                        <th scope="row">Hit Dice</th>
                        <td>{monsterInfo.hit_dice}</td>
                    </tr>
                    <tr>
                        <th scope="row">Hit Points Roll</th>
                        <td>{monsterInfo.hit_points_roll}</td>
                    </tr>
                    <tr>
                        <th scope="row">Challenge Rating</th>
                        <td>{monsterInfo.challenge_rating}</td>
                    </tr>
                    <tr>
                        <th scope="row">XP</th>
                        <td>{monsterInfo.xp}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MonsterInfo;