import styles from "./details.module.css";
import { useContext } from "react";
import DataContext from "../store/data-context";
function Detail(props) {
  const ctx = useContext(DataContext);
  return (
    <ul className={styles["list-container"]}>
      {ctx.data.map((obj) => {
        return (
          <li className={(styles.margin, styles.list)} key={obj.id}>
            <p className={styles.margin}>
              my name is <span className={styles.red}>{obj.name}</span> with age
              of <span className={styles.blue}>{obj.age}</span>
            </p>

            <div className={styles.margin}>
              <label htmlFor="name">update name: </label>
              <input
                onChange={(e) => {
                  props.onInputNameChange(obj.id, e.target.value);
                }}
                id="name"
                type="text"
              />
              <label htmlFor="age">update age: </label>
              <input
                onChange={(e) => {
                  props.onInputAgeChange(obj.id, e.target.value);
                }}
                id="age"
                type="number"
              />
            </div>
            <button
              className={styles.margin}
              onClick={() => {
                props.onGetId(obj.id);
              }}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
export default Detail;
