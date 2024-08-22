import Note from "./components/Note.tsx";
import SideMenu from "./components/SideMenu.tsx";
import "./index.css";

function App() {
  return (
    <>
      <div className="note_container">
        <SideMenu />
        <Note titre="test" note="test test test" />
        <Note titre="test" note="test test test" />
        <Note titre="test" note="test test test" />
        <Note titre="test" note="test test test" />
        <Note titre="test" note="test test test" />
        <Note titre="test" note="test test test" />
        <Note titre="test" note="test test test" />
      </div>
    </>
  );
}

export default App;
