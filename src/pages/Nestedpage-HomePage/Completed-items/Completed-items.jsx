import { useEffect, useState } from "react";
import "./completeditems.css";
const CompletedItems = () => {
  const [listtodo, SetListtodo] = useState(() => {
    const savedlisttodo = localStorage.getItem("listtodo");
    return savedlisttodo ? JSON.parse(savedlisttodo) : [];
  });
  useEffect(() => {
    localStorage.setItem("listtodo", JSON.stringify(listtodo));
  }, [listtodo]);
  const activeTodo = listtodo.filter((item) => item.active === true);
  const toggleCheckbox = (id) => {
    const updated = listtodo.map((item) =>
      item.id === id ? { ...item, active: !item.active } : item,
    );
    SetListtodo(updated);
    localStorage.setItem("listtodo", JSON.stringify(updated));
  };
  const handledelete = (id) => {
    SetListtodo((value) => value.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="outer_ul">
        <form className="form">
          <ul>
            {activeTodo.map((value) => (
              <div className="todo_item_completed">
                <div className="checkbox_and_text">
                  <input
                    type="checkbox"
                    checked={value.active}
                    onChange={() => toggleCheckbox(value.id)}
                  ></input>
                  <li
                    className={`todo_text ${value.active ? "done" : ""} `}
                    key={value.id}
                  >
                    {value.text}
                  </li>
                </div>
                <button onClick={() => handledelete(value.id)}>delete</button>
              </div>
            ))}
          </ul>
        </form>
      </div>
    </>
  );
};
export default CompletedItems;
