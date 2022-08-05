import { UserAuth } from "../context/AuthContext"

const ProtectedRoute = () => {
    const {user} = UserAuth()

    if(!user) {
        return 
    }
}