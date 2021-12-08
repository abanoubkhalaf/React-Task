import { BrowserRouter, Routes, Route } from "react-router-dom";

import FilterForm from "./FilterForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<FilterForm />} />
        <Route exact path="/:id" element={<FilterForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
