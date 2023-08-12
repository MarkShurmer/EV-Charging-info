import appClasses from "./App.module.css";
import { Search } from "./search/Search";

function App() {
  return (
    <>
      <div className={appClasses.wrapper}>
        <header className={appClasses.pageHeader}>
          <h1>Charging info</h1>
        </header>
        <article className={appClasses.pageBody}>
          <Search />
        </article>
        <footer className={appClasses.pageFooter}>Sticky footer</footer>
      </div>
    </>
  );
}

export default App;
