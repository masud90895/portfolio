

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import ProjectDitailes from './Components/ProjectDitailes';
import Main from './Layout/Main';

console.log('masud');

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "project/:id",
          loader: ({ params }) => fetch(`https://server-masud90895.vercel.app/project/${params.id}`),
          element: <ProjectDitailes />
        }
      ]

    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
