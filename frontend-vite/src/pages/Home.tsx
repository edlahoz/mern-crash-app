import { useState } from "react";

const Home: React.FC = () => {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const trimmedText = e.currentTarget.value.trim();
    // If the user pressed the Enter key:
    if (e.key === "Enter" && trimmedText) {
      // Dispatch the "todo added" action with this text
      console.log({ type: "todos/todoAdded", payload: trimmedText });
      // And clear out the text input
      setText("");
    }
  };

  return (
    <input
      className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      type="text"
      placeholder="What needs to be done?"
      autoFocus={true}
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default Home;
