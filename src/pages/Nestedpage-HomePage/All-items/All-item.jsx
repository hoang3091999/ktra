import { useEffect, useState } from "react";
import "./allitem.css";
const AllItem = () => {
  const [listtodo, SetListtodo] = useState(() => {
    const savedlisttodo = localStorage.getItem("listtodo");
    return savedlisttodo ? JSON.parse(savedlisttodo) : [];
  });
  const [todoValue, SetTodoValue] = useState("");

  useEffect(() => {
    localStorage.setItem("listtodo", JSON.stringify(listtodo));
  }, [listtodo]);

  const onChange = (e) => {
    const value = e.target.value;
    SetTodoValue(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoValue.trim()) return;
    SetListtodo((item) => [
      ...item,
      {
        id: crypto.randomUUID(),
        active: false,
        text: todoValue,
      },
    ]);
    SetTodoValue("");
  };
  const toggleCheckbox = (id) => {
    SetListtodo((value) =>
      value.map((item) => {
        return item.id === id ? { ...item, active: !item.active } : item;
      }),
    );
  };
  return (
    <>
      <div className="outer_ul">
        <form action="" onSubmit={handleSubmit} className="form">
          <div className="add_bar">
            <input
              type="text"
              placeholder="add details"
              value={todoValue}
              onChange={onChange}
            />
            <button>Add</button>
          </div>

          <ul>
            {listtodo.map((value) => (
              <div className="todo_item">
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
            ))}
          </ul>
        </form>
      </div>
    </>
  );
};
export default AllItem;
