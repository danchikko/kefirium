import { useEffect } from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Main from './pages'

function App() {
	// const [posts, setPosts] = useState([])

	useEffect(() => {
		fetch('http://localhost:3000/employees')
			.then((responce) => responce.json())
			.then((data) => {
	})
	}, [])
	return (
		<div>
			<Header />
			<Main />
			<Footer />
		</div>
	)
}

export default App
