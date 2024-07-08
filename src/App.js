import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Project1 from "./Components/Project1/Project1.jsx";
import Project2 from "./Components/Project2/Project2.jsx";
import Project3 from "./Components/Project3/Project3.jsx";
import Project4 from "./Components/Project4/Project4.jsx";
import Project5 from "./Components/Project5/Project5.jsx";
import Project6 from "./Components/Project6/Project6.jsx";
import Project7 from "./Components/Project7/Project7.jsx";
import Project8 from "./Components/Project8/Project8.jsx";
import Project9 from "./Components/Project9/Project9.jsx";
import Project10 from "./Components/Project10/Project10.jsx";
import Project11 from "./Components/Project11/Project11.jsx";
import Project12 from "./Components/Project12/Project12.jsx";
import Project13 from "./Components/Project13/Project13.jsx";
import Project14 from "./Components/Project14/Project14.jsx";
import Project15 from "./Components/Project15/Project15.jsx";
import Project16 from "./Components/Project16/Project16.jsx";
import Project17 from "./Components/Project17/Project17.jsx";
import Project18 from "./Components/Project18/Project18.jsx";
import Project19 from "./Components/Project19/Project19.jsx";
import Project20 from "./Components/Project20/Project20.jsx";

import Home from "./Components/Home/Home.jsx";
const App = () => {
  document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "u") {
      event.preventDefault();
      alert("Bu funksiyaga ruxsat berilmagan!");
    }
    if (event.ctrlKey && event.shiftKey && event.key === "I") {
      alert("Bu funksiyaga ruxsat berilmagan!");
      event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && event.key === "J") {
      alert("Bu funksiyaga ruxsat berilmagan!");
      event.preventDefault();
    }
    if (event.key === "F12") {
      event.preventDefault();
      alert("Bu funksiyaga ruxsat berilmagan!");
    }
  });
  document.addEventListener("contextmenu", (event) => event.preventDefault());

  return (
    <BrowserRouter>
      <Link to="/" className="br">Back</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
        <Route path="/project5" element={<Project5 />} />
        <Route path="/project6" element={<Project6 />} />
        <Route path="/project7" element={<Project7 />} />
        <Route path="/project8" element={<Project8 />} />
        <Route path="/project9" element={<Project9 />} />
        <Route path="/project10" element={<Project10 />} />
        <Route path="/project11" element={<Project11 />} />
        <Route path="/project12" element={<Project12 />} />
        <Route path="/project13" element={<Project13 />} />
        <Route path="/project14" element={<Project14 />} />
        <Route path="/project15" element={<Project15 />} />
        <Route path="/project16" element={<Project16 />} />
        <Route path="/project17" element={<Project17 />} />
        <Route path="/project18" element={<Project18 />} />
        <Route path="/project19" element={<Project19 />} />
        <Route path="/project20" element={<Project20 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
