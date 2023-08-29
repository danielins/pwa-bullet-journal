import TaskForm from "./components/Tasks/TaskForm";
import TaskList from "./components/Tasks/TaskList";
import Calendar from "./components/Calendar";
import { JournalContextProvider } from "./hooks/useJournalContext";

function App() {
  return (
    <JournalContextProvider>
      <TaskForm />
      <TaskList />
      <Calendar />
    </JournalContextProvider>
  );
}

export default App;
