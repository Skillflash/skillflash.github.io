import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import { Home, Project, Enterprise } from '../pages';

const Routers = () => {
    const [scrollY, setScrollY] = useState(0);

    const logit = () => {
        setScrollY(window.pageYOffset);
    }

    useEffect(() => {
        const watchScroll = () => {
            window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    }, [scrollY]);

    return (
        <Routes>
            <Route path='/enterprise' element={<Enterprise scrollY={scrollY} />} />
            <Route path='/project' element={<Project scrollY={scrollY} />} />
            <Route path="/" exact element={<Home scrollY={scrollY}  />} />
        </Routes>
    )
}

export default Routers;