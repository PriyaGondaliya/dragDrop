import "./App.css";
import Kanban from "./components/Kanban";

function App() {
  return (
    <div className="App">
      <h1 className="title">TO DO LIST</h1>
      <header className="App-header">
        <Kanban />
      </header>
    </div>
  );
}

export default App;
