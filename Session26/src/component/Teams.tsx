import { Link, Outlet } from "react-router-dom";

export default function Teams() {
  return (
    <div>
        <h2>Team Pages</h2>
        <nav>
            <ul>
                <li>
                    <Link to="team1">Team1</Link>
                    <Link to="team2">Team2</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}
