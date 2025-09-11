import { Routes, Route, Navigate } from "react-router-dom";
import Teams from "../component/Teams";
import TeamsIndex from "../component/TeamsIndex";
import Team from "../component/Team";

export default function Index7() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/teams" />} />
      <Route path="/teams" element={<Teams />}>
        <Route index element={<TeamsIndex />} />
        <Route path=":teamId" element={<Team />} />
      </Route>
    </Routes>
  );
}
