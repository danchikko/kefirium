import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { AuthContextProvider } from './context/AuthContext'
import Main from './pages'

function App() {

	return (
		<AuthContextProvider>
			<Header />
			<Main />
			<Footer />
		</AuthC>
	)
}

export default App
