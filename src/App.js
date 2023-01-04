import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login";
import Feed from "./components/Feed";
import Profile from "./components/Profile";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/feed' element={<Feed />} />
				<Route path='/perfil' element={<Profile />} />
				<Route path='/*' element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
