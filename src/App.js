import { Outlet } from "react-router-dom";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <div className="App">
      <SearchBar />
      <Outlet />
    </div>
  );
}

export default App;
