import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login";
import Feed from "./components/Feed";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/feed' element={<Feed />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
