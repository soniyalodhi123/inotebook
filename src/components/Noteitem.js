import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  const handleCopy = () => {
    const textToCopy = `${note.title}\n${note.description}`;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(textToCopy);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }
    if (props.showAlert) {
      props.showAlert("Note copied to clipboard!", "success");
    }
  };
  return (
    <div className="col-md-3">
      <section className="card my-3">
        <div className="card-body">
          <h4 className="card-title">{note.title}</h4>
          <p className="card-text">{note.description}</p>
          {/* Tag और Date दिखाने के लिए */}
          <div className="d-flex justify-content-between align-items-center my-2 pt-2 border-top">
            <span className="badge bg-secondary">{note.tag || "General"}</span>
            <small className="text-muted">
              🕒{" "}
              {new Date(note.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </small>
          </div>
          <button
            type="button"
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("Deleted successfully", "success");
            }}
            style={{
              cursor: "pointer",
              border: "none",
              background: "transparent",
              padding: "10px",
            }}
          >
            <i className="far fa-trash-alt mx-2"></i>
          </button>

          <button
            type="button"
            onClick={() => {
              updateNote(note);
            }}
            style={{
              cursor: "pointer",
              border: "none",
              background: "transparent",
              padding: "10px",
              color: "inherit",
            }}
          >
            <i className="far fa-edit mx-2"></i>
          </button>
          <button
            type="button"
            onClick={handleCopy}
            style={{
              cursor: "pointer",
              border: "none",
              background: "transparent",
              padding: "10px",
              color: "inherit",
            }}
            title="Copy Note"
          >
            <i className="far fa-copy mx-2"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default NoteItem;
