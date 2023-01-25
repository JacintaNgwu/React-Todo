import React from "react";
import styles from "./TodoItem.module.css";

function TodoItem(props) {
  const state = {
    editing: false,
  };
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };
  const { completed, id, title } = props.todo;
  const handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  // componentWillUnmount() {
  //   console.log("Cleaning up...");
  // }

  let viewMode = {};
  let editMode = {};

  if (state.editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  const handleUpdatedDone = event => {
    if (event.key === "Enter") {
      this.setState({ editing: false })
    }
  }
  return (
    <li className={styles.item}>
      <div onDoubleClick={() => handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => {
            props.setUpdate(e.target.value, id);
          }}
          onKeyDown={ () => handleUpdatedDone}
        />
        <button onClick={() => props.deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input type="text" style={editMode} className={styles.textInput} />
    </li>
  );
}
export default TodoItem;
