import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Error from "./Pages/Error/Error";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (

        <BrowserRouter>
            {/* navbar  */}
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="about" element={<About />} />
                {/* not found routes  */}
                <Route path="*" element={<Error/> } />
            </Routes>

            {/* footer component  */}
            <Footer />

        </BrowserRouter>

    );
  // return (
  //   <>
  //     <h1 className="text-3xl text-center font-bold font-calsans">
  //       Hello world!
  //     </h1>
  //     <h1 className="text-3xl text-center font-bold font-figtree">
  //       Hello world!
  //     </h1>
  //   </>
  // );
}


export default App;
