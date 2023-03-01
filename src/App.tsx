import { AddTask } from "./components/AddTask";
import { Header } from "./components/Header";
import { TaskContainer } from "./components/TaskContainer";

function App() {
  return (
    <div>
      <Header />
      <AddTask />
      <TaskContainer />
    </div>
  );
}

export default App;
