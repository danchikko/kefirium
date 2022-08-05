import { useDispatch } from "react-redux"
import { UserAuth } from "../context/AuthContext"

const ProtectedRoute = ({children}) => {
    const dispatch = useDispatch()
    const {user} = UserAuth()

    if(!user) {
        return dispatch(modal)
    }

    return children;
}

export default ProtectedRoute;