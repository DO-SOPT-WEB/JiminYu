import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import MyPage from "../pages/MyPage";

<BrowserRouter>
  <Routes>
    <Route path="/login" element={SignInPage}></Route>
    <Route path="/signup" element={SignUpPage}></Route>
    <Route path="/mypage/:userId" element={MyPage}></Route>
  </Routes>
</BrowserRouter>;
