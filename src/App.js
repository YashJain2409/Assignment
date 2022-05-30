import "antd/dist/antd.min.css";
import "./App.css";
import "./Components/OnBoard.css";
import "./Components/ProfileEdit.css"
import OnBoard from "./Components/OnBoard";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProfileEdit from "./Components/ProfileEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnBoard />} />
        <Route path="/Profile" element={<ProfileEdit />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
