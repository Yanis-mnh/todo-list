import { useEffect, useState } from "react";
import Note from "./Note";

const HandelClick = (
  title: string = " ",
  value: string = " ",
  notes: any,
  SetNotes: CallableFunction
) => {
  const newNotes = [...notes, [title, value]];
  SetNotes(newNotes);
};

export default function Notes() {
  const [notes, SetNotes] = useState([
    ["test", "potato"],
    ["test02", "potato02"],
  ]);

  useEffect(() => {
    scrollTo("bottomPage");
  }, [notes]);

  return (
    <>
      <div className="note_container">
        <button
          className="addNoteButton"
          onClick={() => HandelClick(" ", " ", notes, SetNotes)}
        >
          <img src="icons/add_icon.png"></img>
        </button>
        {notes.map((value, index) => (
          <Note key={index} titre={value[0]} note={value[1]}></Note>
        ))}
      </div>
    </>
  );
}

const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  const goTo =
    element?.offsetTop != undefined ? element.offsetTop + 240 : undefined;
  window.scrollTo({ top: goTo, behavior: "smooth" });
  console.log(goTo);
};
