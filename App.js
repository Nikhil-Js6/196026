import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './App.css';
import Topbar from './components/Header/Topbar';
import Home from "./pages/Home";
import TrainInfo from "./pages/TrainInfo";

function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/trains/:trainId",
    element: <TrainInfo />,
  },
]);

  return (
    <div className="App">
       <Topbar />
       <RouterProvider router={router} />
    </div>
  );
}

export default App;


  /*
  {
  "companyName": "Train Central",
  "clientID": "d15314c8-a8fe-4bb4-894a-fd2b14d1b8ed",
  "clientSecret": "IiVhrvWrbOIVVyxD",
  "ownerName": "Nikhil kumar",
  "ownerEmail": "nikhilpahal2001@gmail.com",
  "rollNo": "196026"
}
  */