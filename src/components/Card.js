import React from "react";
import Detail from "./details";

function Card(props) {
  function getId(id) {
    props.onGetData(id);
  }
  const inputNameChangeHandler = (id, name) => {
    props.onNewName(id, name);
  };
  const inputAgeChangeHandler = (id, age) => {
    props.onNewAge(id, age);
  };
  return (
    <React.Fragment>
      <Detail
        onInputAgeChange={inputAgeChangeHandler}
        onInputNameChange={inputNameChangeHandler}
        onGetId={getId}
      ></Detail>
    </React.Fragment>
  );
}
export default Card;
