import { UserAuth } from "../context/AuthContext"

const ProtectedRoute = ({children}) => {
    const {user} = UserAuth()

    if(!user) {
        return <Navi
    }

    return children;
}

export default ProtectedRoute;