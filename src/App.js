import React, { useState } from "react";
import Card from "./components/Card";
import DataContext from "./store/data-context";

const App = () => {
  const [submitedForm, setForm] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  function formHandler(e) {
    e.preventDefault();
    const newObj = { id: Math.random(), name: name, age: age };
    setForm((prev) => [...prev, newObj]);
    setName("");
    setAge("");
  }
  function deleteFunc(id) {
    submitedForm.forEach((obj, i) => {
      for (let key in obj) {
        if (obj[key] === id) {
          setForm(
            submitedForm.filter((item, j) => {
              return j !== i;
            })
          );
        }
      }
    });
  }
  const newNameHandler = (id, newName) => {
    submitedForm.forEach((obj, i, array) => {
      for (let key in obj) {
        if (obj[key] === id) {
          obj.name = newName;
          setForm([...array]);
        }
      }
    });
  };
  const newAgeHandler = (id, newAge) => {
    submitedForm.forEach((obj, i, array) => {
      for (let key in obj) {
        if (obj[key] === id) {
          obj.age = newAge;
          setForm([...array]);
        }
      }
    });
  };
  return (
    <React.Fragment>
      <DataContext.Provider value={{ data: submitedForm }}>
        <form onSubmit={formHandler}>
          <label htmlFor="name">name</label>
          <input
            onChange={nameChangeHandler}
            value={name}
            id="name"
            type="text"
          />
          <label htmlFor="age">age</label>
          <input
            onChange={ageChangeHandler}
            value={age}
            id="age"
            type="number"
          />
          <button type="submit">submit</button>
        </form>
        <Card
          onNewName={newNameHandler}
          onNewAge={newAgeHandler}
          onGetData={deleteFunc}
        ></Card>
        {/* <Card onGetData={deleteFunc} data={submitedForm}></Card> */}
      </DataContext.Provider>
    </React.Fragment>
  );
};

export default App;
