import "./App.css";
import WatchList from "../src/Components/Watchlist";
import Watched from "../src/Components/Watched";

import AddButton from "./Buttons/AddButton";
function App() {
  return (
    <div>
      <AddButton />
      <WatchList />
      <Watched />
    </div>
  );
}

export default App;
