import { UserAuth } from "../context/AuthContext"
import MainPage from "../pages/main-page"
import SignIn from "./signIn/SignIn"

const ProtectedRoute = ({children}) => {
    const {user} = UserAuth()

    if(!user) {
        return (
            
        )
    }

    return children;
}

export default ProtectedRoute;