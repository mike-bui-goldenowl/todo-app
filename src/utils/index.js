export function getDate() {
  const date = new Date();
  return `${date.getDay()} ${date.getMonth()} ${date.getFullYear()}`;
}

// TOdo actions

export function initTodo(text) {
  return {
    id: Math.random(1000),
    text,
    date: getDate(),
    isCompleted: false,
  };
}

export const delTodo = (todoList, itemToRemove) => todoList.filter((item) => item.id !== itemToRemove.id);

export const updateTodo = (todoList, itemToEdit) => (
  todoList.map((item) => (item.id === itemToEdit.id ? itemToEdit : item))
);
