import React from 'react';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { AboutPage } from './pages/AboutPage';
import { MainPage } from './pages/MainPage';

export function App() {
    return (
        <AppDiv>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
                <footer>
                    <ul>
                        <li>
                            <Link to={`/`}>Home</Link>
                        </li>
                        <li>
                            <Link to={`/about`}>About</Link>
                        </li>
                    </ul>
                </footer>
            </HashRouter>
        </AppDiv>
    );
}

const AppDiv = styled.div`
    border: 1px dashed red;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
