import ReactDOM from "react-dom/client";
import { createStore } from "redux";

import counterReducer from "./reducers/counterReducer";

import App from "./App";

const store = createStore(counterReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
function renderApp() {
  root.render(<App store={store} />);
}

renderApp();
store.subscribe(renderApp);
