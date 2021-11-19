import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './index.css';
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
            </HashRouter>
        </AppDiv>
    );
}

const AppDiv = styled.div``;
