import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducer/rootReducer";
import { devToolsEnhancer } from "redux-devtools-extension";

export default function configureStore() {
  return createStore(
    rootReducer,
    devToolsEnhancer()
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  );
}
