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
  console.log(notes);
};

export default function Notes() {
  const [notes, SetNotes] = useState([
    ["test", "potato"],
    ["test02", "potato02"],
  ]);

  return (
    <>
      <button onClick={() => HandelClick(" ", " ", notes, SetNotes)}>
        ADD NOTE
      </button>
      <div className="note_container">
        {notes.map((value, index) => (
          <Note key={index} titre={value[0]} note={value[1]}></Note>
        ))}
      </div>
    </>
  );
}
