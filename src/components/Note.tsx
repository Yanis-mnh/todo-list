import React from "react";

interface NoteProps {
  titre: string;
  note: string;
}

const Note: React.FC<NoteProps> = ({ titre, note }) => {
  return (
    <div className="note">
      <h3>{titre}</h3>
      <p>{note}</p>
    </div>
  );
};

export default Note;
