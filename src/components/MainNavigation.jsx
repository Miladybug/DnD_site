import { NavLink } from "react-router-dom"

const MainNavigation = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary p-3">
                <NavLink to='/' className="navbar-brand">
                    Home
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to='/class_list' className="nav-link">Classes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/race_list' className="nav-link">Races</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/spell_list' className="nav-link">Spells</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/equipment_list' className="nav-link">Equipment</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/monster_list' className="nav-link">Monsters</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/character_info' className="nav-link">Character Info</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink to='/create_a_character' className="nav-link">Create a Character</NavLink>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default MainNavigation;