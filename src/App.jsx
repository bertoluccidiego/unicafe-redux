function App({ store }) {
  function good() {
    store.dispatch({
      type: "GOOD",
    });
  }

  function ok() {
    store.dispatch({
      type: "OK",
    });
  }

  function bad() {
    store.dispatch({
      type: "BAD",
    });
  }

  function zero() {
    store.dispatch({
      type: "ZERO",
    });
  }

  return (
    <div>
      <button type="button" onClick={good}>
        good
      </button>
      <button type="button" onClick={ok}>
        ok
      </button>
      <button type="button" onClick={bad}>
        bad
      </button>
      <button type="button" onClick={zero}>
        reset stats
      </button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  );
}

export default App;
