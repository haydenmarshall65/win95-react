import './App.css';
import { HomeScreen } from "./pages/homescreen/HomeScreen";
import { ThemeProvider } from "@react95/core";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme='matrix'>
        <HomeScreen/>
      </ThemeProvider>
    </div>
  );
}

export default App;
