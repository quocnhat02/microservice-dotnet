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
  const [checked, setChecked] = useState([]);

  const handleCheck = (id) => {
    setChecked((prev) => {
      // const isChecked = checked.includes(id);
      // if (isChecked) {
      //   return checked.filter((item) => item !== id);
      // } else {
      //   return [...prev, id];
      // }
      return checked.includes(id)
        ? checked.filter((item) => item !== id)
        : [...prev, id];
    });
  };

  const handleSubmit = () => {
    console.log({ ids: checked });
  };

  return (
    <div className="App" style={{ padding: 30 }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            id={course.id}
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          <label htmlFor={course.id}>{course.name}</label>
        </div>
      ))}

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
