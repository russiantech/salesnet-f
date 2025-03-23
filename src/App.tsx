// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/home/Home";
// import { NotFoundPage, NotImplimentedPage } from "./pages/Notfound";
// import Canvas from "./components/shared/modals/Canvas";
// import Publish from "./components/shared/modals/publish/Publish";
// import AuthRoutes from "./routes/AuthRoutes";
// import ProductRoutes from "./routes/ProductRoutes";

// const App = () => {
//   return (
//     <>
//       <NotImplimentedPage />
//       <Publish />
//       <Canvas />
      
//       <ProductRoutes />
//       <AuthRoutes />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="*" element={<NotFoundPage />} /> */}
//       </Routes>
//     </>    
//   );
// };

// const Root = () => (
//   <Router>
//     <App />
//   </Router>
// );

// export default Root;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { NotFoundPage, NotImplimentedPage } from "./pages/Notfound";
import Canvas from "./components/shared/modals/Canvas";
import Publish from "./components/shared/modals/publish/Publish";
import AuthRoutes from "./routes/AuthRoutes";
import ProductRoutes from "./routes/ProductRoutes";
import UserRoutes from "./routes/UserRoutes";

const App = () => {
  return (
    <>
      <NotImplimentedPage />
      <Publish />
      <Canvas />
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Include ProductRoutes and AuthRoutes as nested routes */}
        <Route path="/products/*" element={<ProductRoutes />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/user/*" element={<UserRoutes />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};


const Root = () => (
  <Router>
    <App />
  </Router>
);

export default Root;
