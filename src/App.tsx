import TaskForm from "./components/Tasks/TaskForm";
import TaskList from "./components/Tasks/TaskList";
import { JournalContextProvider } from "./hooks/useJournalContext";

function App() {
  return (
    <JournalContextProvider>
      <TaskForm />
      <TaskList />
    </JournalContextProvider>
  );
}

export default App;
