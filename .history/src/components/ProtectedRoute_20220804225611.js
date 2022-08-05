import { useDispatch } from "react-redux"
import { UserAuth } from "../context/AuthContext"
import { modalSignIn } from "../store/registerSlice"

const ProtectedRoute = ({children}) => {
    const dispatch = useDispatch()
    const {user} = UserAuth()

    if(!user) {
      dispatch(modalSignIn())
    }

    return children;
}

export default ProtectedRoute;