import { NavLink } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <div className="jumbotron jumbotron-fuild" id="jumbotron">
                <h1 className="page-header">Dungeons and Dragons</h1>
            </div>
            <div className="custom-list-header">
                <div className="card custom-card-div">
                    <NavLink to='/class_list' className="home-cards">Classes</NavLink>
                </div>
                <div className="card custom-card-div">
                    <NavLink to='/race_list' className="home-cards">Races</NavLink>
                </div>
                <div className="card custom-card-div">
                    <NavLink to='/spell_list' className="home-cards">Spells</NavLink>
                </div>
                <div className="card custom-card-div">
                    <NavLink to='/equipment_list' className="home-cards">Equipment</NavLink>
                </div>
                <div className="card custom-card-div">
                    <NavLink to='/monster_list' className="home-cards">Monsters</NavLink>
                </div>
                <div className="card custom-card-div">
                    <NavLink to='/character_info' className="home-cards">Character Info</NavLink>
                </div>
            </div>
        </>
    )
}

export default HomePage;