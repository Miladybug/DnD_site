import useFetchList from "../hooks/useFetchList";
import WeaponsInfo from "../components/EquipmentTypes/WeaponsInfo"
import AdventuringInfo from "../components/EquipmentTypes/AdventuringInfo";
import ToolInfo from "../components/EquipmentTypes/ToolsInfo"
import MountsInfo from "../components/EquipmentTypes/MountsInfo"
import ArmorInfo from "../components/EquipmentTypes/ArmorInfo";

const EquipmentPage = () => {
    const equipmentList = useFetchList('equipment');
    
    const weaponDisplay = equipmentList.map(equipmentName => {
        return <WeaponsInfo index={equipmentName} />
    })
    const armorDisplay = equipmentList.map(equipmentName => {
        return <ArmorInfo index={equipmentName} />
    })
    const adventuringDisplay = equipmentList.map(equipmentName => {
        return <AdventuringInfo index={equipmentName} />
    })
    const toolDisplay = equipmentList.map(equipmentName => {
        return <ToolInfo index={equipmentName} />
    })
    const mountsDisplay = equipmentList.map(equipmentName => {
        return <MountsInfo index={equipmentName} />
    })

    return (
        <>
            <h1 className="page-header">Equipment</h1>
            <div className="card full-card">
                <h2 className="text-primary custom-card-header">Weapons</h2>
                <table className="table table-striped table-border">
                    <thead>
                        <tr>
                            <th scope="row">Name</th>
                            <th>Category/Range</th>
                            <th>Cost</th>
                            <th>Damage</th>
                            <th>Range</th>
                            <th>Weight</th>
                            <th>Properties</th>
                        </tr>
                    </thead>
                    <tbody>
                        {weaponDisplay}
                    </tbody>
                </table>
            </div>
            <div className="card full-card">
                <h2 className="text-primary custom-card-header">Armor</h2>
                <table className="table table-striped table-border">
                    <thead>
                        <tr>
                            <th scope="row">Name</th>
                            <th>Category</th>
                            <th>Armor Class</th>
                            <th>Strength Minimum</th>
                            <th>Stealth Disadvantage</th>
                            <th>Weight</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {armorDisplay}
                    </tbody>
                </table>
            </div>
            <div className="card full-card">
                <h2 className="text-primary custom-card-header">Adventuring Gear</h2>
                <table className="table table-striped table-border">
                    <thead>
                        <tr>
                            <th scope="row">Name</th>
                            <th>Equipment Category</th>
                            <th>Subcategory</th>
                            <th>Cost</th>
                            <th>Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {adventuringDisplay}
                    </tbody>
                </table>
            </div>
            <div className="card full-card">
                <h2 className="text-primary custom-card-header">Tools</h2>
                <table className="table table-striped table-border">
                    <thead>
                        <tr>
                            <th scope="row">Name</th>
                            <th>Equipment Category</th>
                            <th>Subcategory</th>
                            <th>Cost</th>
                            <th>Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toolDisplay}
                    </tbody>
                </table>
            </div>
            <div className="card full-card">
                <h2 className="text-primary custom-card-header">Mounts and Vehicles</h2>
                <table className="table table-striped table-border">
                    <thead>
                        <tr>
                            <th scope="row">Name</th>
                            <th>Equipment Category</th>
                            <th>Subcategory</th>
                            <th>Cost</th>
                            <th>Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mountsDisplay}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EquipmentPage;