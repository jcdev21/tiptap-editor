import React from 'react';
import Tiptap from './components/Tiptap';
import DOMPurify from 'dompurify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Demo1 from './pages/Demo1';
import Demo2 from './pages/Demo2';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Demo1 />} />
				<Route path="/demo2" element={<Demo2 />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
