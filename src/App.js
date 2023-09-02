import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import SingleBlog from "./components/Blog/SingleBlog";
import Main from "./Main";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/singleblog" element={<SingleBlog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
