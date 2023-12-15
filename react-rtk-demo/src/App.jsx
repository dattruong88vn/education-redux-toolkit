import "./App.css";
import { CakeView } from "./features/cake/CakeView";
import { IceCreamView } from "./features/icecream/IceCreamView";
import { UsersView } from "./features/users/UsersView";

function App() {
  return (
    <div>
      <CakeView />
      <IceCreamView />
      <UsersView />
    </div>
  );
}

export default App;
