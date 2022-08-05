import { UserAuth } from "../context/AuthContext"

const ProtectedRoute = ({children}) => {
    const {user} = UserAuth()

    if(!user) {
        return (
            <Nav
        )
    }

    return children;
}

export default ProtectedRoute;