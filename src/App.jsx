import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js'
import RootLayout from "./pages/Root"
import HomePage from "./pages/HomePage"
import ClassListPage from "./pages/ClassListPage"
import MonsterListPage from "./pages/MonsterListPage"
import RaceListPage from "./pages/RaceListPage"
import SpellListPage from "./pages/SpellListPage"
import ErrorPage from "./pages/ErrorPage"
import CharacterInfoPage from './pages/CharacterInfoPage';
import EquipmentPage from './pages/EquipmentPage'
import CharacterCreationPage from './pages/CharacterCreationPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'class_list', element: <ClassListPage /> },
      { path: 'spell_list', element: <SpellListPage /> },
      { path: 'race_list', element: <RaceListPage /> },
      { path: 'monster_list', element: <MonsterListPage /> },
      { path: 'character_info', element: <CharacterInfoPage /> },
      { path: 'equipment_list', element: <EquipmentPage /> } ,
      { path: 'create_a_character', element: <CharacterCreationPage /> }
    ]
  }
])

function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App
