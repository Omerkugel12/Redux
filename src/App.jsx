import { useDispatch, useSelector } from "react-redux";
import {
  changeCounterName,
  decrement,
  increment,
} from "./store/actions/counter.action";
import { setLang, setTheme } from "./store/actions/settings.action";
import { useEffect, useState } from "react";
import { fetchCats } from "./store/actions/cats.action";

function App() {
  const { count, name } = useSelector((state) => state.counterModule);
  const { theme, lang } = useSelector((state) => state.settingsModule);
  const { cats } = useSelector((state) => state.catsModule);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats());
  }, []);

  function handleIncrement() {
    dispatch(increment());
  }

  function handledecrement() {
    dispatch(decrement());
  }

  function handleChangeCounterName(e) {
    const name = e.target.value;
    dispatch(changeCounterName(name));
  }

  function handleChangeTheme(theme) {
    dispatch(setTheme(theme));
  }

  function handleChangeLang(lang) {
    dispatch(setLang(lang));
  }
  return (
    <>
      {/* Counter */}
      <div>
        <h1>
          Counter: {count} name: {name}
        </h1>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handledecrement}>-</button>
        <input
          type="text"
          className="border "
          value={name}
          onChange={handleChangeCounterName}
        />
      </div>
      {/* Settings */}
      <div>
        <h1>Settings</h1>
        <div>
          <p>{theme}</p>
          <button
            className="border bg-orange-600 p-1 rounded-lg"
            onClick={() => handleChangeTheme("light")}
          >
            Light
          </button>
          <button
            className="border bg-slate-400 p-1 rounded-lg"
            onClick={() => handleChangeTheme("dark")}
          >
            Dark
          </button>
        </div>
        <div>
          <p>{lang}</p>
          <button onClick={() => handleChangeLang("en")}>en</button>
          <button onClick={() => handleChangeLang("he")}>he</button>
        </div>
      </div>
      {/* Cats */}
      <div>
        <h1>Cats 😼</h1>
        <ul>
          {cats.map((cat) => {
            return <li key={cat.id}>{cat.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
