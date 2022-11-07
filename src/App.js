import Search from "./Search";
import Stories from "./Stories";
import Pagination from "./Pagination";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      {/* <div>welcome to snehal's website </div> */}
        <Search/>
        <Pagination/>
       <Stories />
     
    </div>
  );
}
