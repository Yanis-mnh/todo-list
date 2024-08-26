import Notes from "./components/Notes.tsx";
import SideMenu from "./components/SideMenu.tsx";
import "./index.css";

function App() {
  return (
    <>
      <SideMenu />
      <Notes />
      <div id="bottomPage"></div>
    </>
  );
}

export default App;
