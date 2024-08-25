import { useState } from "react";
import Note from "./Note";

const HandelClick = (
  title: string = " ",
  value: string = " ",
  notes: any,
  SetNotes: CallableFunction
) => {
  const newNotes = [...notes, [title, value]];
  SetNotes(newNotes);
  scrollTo("lastItemAdded");
};

export default function Notes() {
  const [notes, SetNotes] = useState([
    ["test", "potato"],
    ["test02", "potato02"],
  ]);

  return (
    <>
      <div className="note_container">
        <button
          className="addNoteButton"
          onClick={() => HandelClick(" ", " ", notes, SetNotes)}
        >
          ADD NOTE
        </button>
        {notes.map((value, index) => (
          <Note key={index} titre={value[0]} note={value[1]}></Note>
        ))}
        <div id="lastItemAdded"></div>
      </div>
    </>
  );
}

const scrollTo = (id: string) => {
  const element = document.getElementById(id)?.offsetTop;
  window.scrollTo({ top: element, behavior: "smooth" });
};
