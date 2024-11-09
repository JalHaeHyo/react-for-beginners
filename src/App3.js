import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Detail from "./routes/Detail";
import Home from "./routes/Home";
// 임포트 이름 from "js 경로";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/movie/:id" element={<Detail />}></Route>
                <Route path="/Hello" element={<h1> Hello </h1>}></Route>
                // 깃허브 배포를 위한 동적 경로 설정
                {/* <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
                <Route path={`${process.env.PUBLIC_URL}/movie:id`} element={<Detail />}></Route>
                <Route path={`${process.env.PUBLIC_URL}/hello`} element={<h1> Hello </h1>}></Route> */}
            </Routes>
        </Router>
    );
}

export default App;
