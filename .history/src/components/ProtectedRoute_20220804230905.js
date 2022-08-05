import { useDispatch } from "react-redux"
import { UserAuth } from "../context/AuthContext"
import MainPage from "../pages/main-page"
import { modalSignIn } from "../store/registerSlice"

const ProtectedRoute = ({children}) => {
    const {user} = UserAuth()
    const dispatch = useDispatch()

    if(!user) {
        return (
            <MainPage />
            dispatch={modal}
        )
    }

    return children;
}

export default ProtectedRoute;