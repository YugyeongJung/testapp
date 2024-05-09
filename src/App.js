import { 
  BrowserRouter,
  Routes,
  Route, 
  Navigate,
} from 'react-router-dom';
import MainPage from './components/MainPage.js';
import Within from './components/Within.js';
import Between from './components/Between.js';

export default function App(){
  return(
    <div className="App">
				<BrowserRouter>
					<Routes>
					<Route exact path="/" element={<Navigate to="/MainPage" />} />
					<Route path="/MainPage" element={<MainPage />} />
          <Route path="/Within" element={<Within />} />
          <Route path="/Between" element={<Between />} />
				</Routes>				
			</BrowserRouter>
		</div>
  )
}