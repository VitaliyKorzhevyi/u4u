import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./modules/layout/Layout.jsx";

const Main = lazy(() => import("./pages/Main/Main.jsx"));
const Resources = lazy(() => import("./pages/Resources/Resources.jsx"));
const Educational = lazy(() => import("./pages/Educational/Educational.jsx"));
const Community = lazy(() => import("./pages/Community/Community.jsx"));


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="resources" element={<Resources />} />
        <Route path="educational" element={<Educational />} />
        <Route path="community" element={<Community />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
