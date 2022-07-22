import { Route, Routes } from "react-router-dom"
import MainPage from "./main-page"

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            
        </Routes>
    )
}

export default Main