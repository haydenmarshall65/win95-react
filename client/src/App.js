import './App.css';
import { HomeScreen } from "./pages/homescreen/HomeScreen";
import { ThemeProvider } from "@react95/core";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {

  const currentUser = true;

  const ProtectedRoute = ({ children }) => {
    if(!currentUser){
      return <Navigate to="/login" />
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
      <ProtectedRoute>
        <HomeScreen/>
      </ProtectedRoute>)
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    }
  ])

  return (
    <div className="App">
      <ThemeProvider theme='matrix'>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </div>
  );
}

export default App;
