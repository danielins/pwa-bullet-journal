import TaskForm from "./components/Tasks/TaskForm";
import TaskList from "./components/Tasks/TaskList";
import Calendar from "./components/Calendar";
import { JournalContextProvider } from "./hooks/useJournalContext";
import { ThemeProvider } from "@emotion/react";

import { lightTheme } from "./styles/themes/light";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <JournalContextProvider>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <TaskForm />
        <TaskList />
        <Calendar />
      </ThemeProvider>
    </JournalContextProvider>
  );
}

export default App;
