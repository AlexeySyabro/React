import { Router } from "./components/Router";
import { store } from "./store";
import { Provider } from "react-redux";

const App = () => 
<Provider store={store}>
    <Router />
</Provider>


export default App;
