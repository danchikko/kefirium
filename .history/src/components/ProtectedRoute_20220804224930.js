import { UserAuth } from "../context/AuthContext"

const ProtectedRoute = ({children}) => {
    const {user} = UserAuth()

    if(!user) {
        return dis
    }

    return children;
}

export default ProtectedRoute;