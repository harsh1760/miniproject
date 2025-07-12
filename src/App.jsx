import { ThemeProvider } from './DarkLight';  // ✅ Correct import
import { DarkLight } from './DarkLight';      // ✅ Correct import
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <DarkLight />
    </ThemeProvider>
  );
}

export default App;
