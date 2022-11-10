import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}></Route>
        <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail />}></Route>
        {/* id라는 변수를 가져온다. */}
        <Route path={`${process.env.PUBLIC_URL}/hello`} element={<h1>hello</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;