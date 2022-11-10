import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
        {/* id라는 변수를 가져온다. */}
        <Route path="/hello" element={<h1>hello</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;