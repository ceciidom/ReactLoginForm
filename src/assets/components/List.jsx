import "./List.css";
import InputBox from "./InputBox";
import ListItem from "./ListItem";
import { useState } from "react";

let itemId = 0;

function List() {
    const [items, setItems] = useState([]);
    const [editingItemId, setEditingItemId] = useState(null);
    const [editedText, setEditedText] = useState("");

    const addItem = (inputText) => {
        const newItem = { id: itemId++, text: inputText };
        setItems(prevItems => [...prevItems, newItem]);
    }

    const deleteItem =(id) => {
        setItems(items.filter(item => item.id !== id));
            //return newItems
    };
    const editItem = (id) => {
        setEditingItemId(id);
        const itemToEdit = items.find(item => item.id === id);
        if (itemToEdit) {
            setEditedText(itemToEdit.text)
        }

    };
    const handleEditChange = (e) => {
        setEditedText(e.target.value);
    };

    const handleEditSubmit = (id) => {
        const updatedItems = items.map(item =>
            item.id === id ? {...item, text: editedText} : item);
            setItems(updatedItems);
            setEditingItemId(null);
            setEditedText("")
    }

  return (
    <div className="card">
      <span className="title">To Do List</span>
      <InputBox click={addItem} />
      <div>
        {items.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            text={item.id === editingItemId ? editedText : item.text}
            onChecked={deleteItem}
            onDoubleClick = {editItem}
            isEditing={item.id === editingItemId}
            onChange={handleEditChange}
            onSubmit={() => handleEditSubmit(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default List