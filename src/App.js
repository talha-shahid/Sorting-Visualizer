import SortingVisualizer from "./SortingVisualizer";
import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <div className="container">
            <SortingVisualizer />
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
