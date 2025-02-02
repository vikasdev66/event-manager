import EventFormPage from "./pages/EventFormPage";
import EventListPage from "./pages/EventListPage";
import CommunityPage from "./pages/CommunityPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "",
    element: <EventListPage />,
  },
  {
    path: "community",
    element: <CommunityPage />,
  },
  {
    path: "create-event",
    element: <EventFormPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
