import React, { useState } from "react";

interface NoteProps {
  titre: string;
  note: string;
}

const Note: React.FC<NoteProps> = ({ titre, note }) => {
  const [newTitre, setTitre] = useState(titre);
  const [newNote, setNote] = useState(note);

  const handleTitreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitre(e.target.value);
  };
  const handleNoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };
  return (
    <div className="note">
      <input
        value={newTitre}
        onChange={handleTitreChange}
        placeholder="Titre"
      />
      <input value={newNote} onChange={handleNoteChange} placeholder="Note" />
    </div>
  );
};

export default Note;
