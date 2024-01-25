import logo from "./logo.svg";
import "./global.css";
import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import IndexComponet from "./layout/IndexComponet";
import { ChakraProvider } from "@chakra-ui/react";
import Member from "./componets/member/Member";

const routes = createBrowserRouter(
  createRoutesFromElements(
    // <Route path={"경로명"} element={보여줄 element 또는 컴포넌트}/>
    <Route path="/" element={<IndexComponet />}>
      <Route path="member" element={<Member />} />
    </Route>,
  ),
);

function App() {
  return (
    <ChakraProvider>
      {/*<RouterProvider router={createBrowserRouter 설정한 변수명} /> 작성*/}
      <RouterProvider router={routes} />
    </ChakraProvider>
  );
}

export default App;
