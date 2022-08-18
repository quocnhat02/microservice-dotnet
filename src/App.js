import React, { useState } from "react";

const courses = [
  {
    id: 1,
    name: "HTML, CSS",
  },
  {
    id: 2,
    name: "Javascript",
  },
  {
    id: 3,
    name: "ReactJS",
  },
];

function App() {
  const [checked, setChecked] = useState(1);
  const handleSubmit = () => {
    console.log({ id: checked });
  };

  return (
    <div className="App" style={{ padding: 30 }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="radio"
            id={course.id}
            checked={checked === course.id}
            onChange={() => setChecked(course.id)}
          />
          <label htmlFor={course.id}>{course.name}</label>
        </div>
      ))}

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
