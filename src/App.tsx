import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Error from "./Pages/Error/Error";
import Footer from "./Components/Footer/Footer";
import Wallet from "./Pages/Wallet/Wallet";
import Payment from "./Pages/Payment/Payment";

const AppRoutes = () => {
  const location = useLocation();
  const hideNavbar = ["/wallet", "/payment"];
  const shouldHide = hideNavbar.includes(location.pathname);

  return (
    <>
      
      {!shouldHide && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="payment" element={<Payment />} />
        <Route path="*" element={<Error />} />
      </Routes>

      {/* Footer */}
      {!shouldHide && <Footer />}
      
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
