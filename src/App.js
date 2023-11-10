import "./App.css";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

function App({element}) {
  const [progress, setProgress] = useState(0);
  const [mode,setMode]=useState(false)
  const [search,setSearch]=useState('delhi')

  const handleSearch=()=>{
    setMode(true)
    console.log(mode)
  }
  let pagesize=6;
  return (
    <>
      <Router>
        <Navbar handleSearch={handleSearch}/>
        <LoadingBar height={3} color="black" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News setProgress={setProgress}
                key="general"
                country="in"
                category="general"
                pagesize={pagesize}
                mode={mode}
                search={search}
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News setProgress={setProgress}
                key="business"
                country="in"
                category="business"
                pagesize={pagesize}
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News setProgress={setProgress} key="sports" country="in" category="sports" pagesize={pagesize} />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News setProgress={setProgress} key="health" country="in" category="health" pagesize={pagesize} />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News setProgress={setProgress}
                key="science"
                country="in"
                category="science"
                pagesize={pagesize}
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News setProgress={setProgress}
                key="technology"
                country="in"
                category="technology"
                pagesize={pagesize}
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News setProgress={setProgress}
                key="entertainment"
                country="in"
                category="entertainment"
                pagesize={pagesize}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
