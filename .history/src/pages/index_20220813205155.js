import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import ProfileSetting from '../components/myProfile/profileSetting'
import ProtectedRoute from '../components/ProtectedRoute'
import AboutNFT from '../components/support/AboutNFT'
import PaymentRules from '../components/support/PaymentRules'
import UserOffer from '../components/support/UserOffer'
import {
	closeCategoriesModal,
	closeSupportModal,
} from '../store/optionsSlice'
import { modalRegisterGlobal } from '../store/registerSlice'
import Categories from './categories/Categories'
import CreateNewCollection from './createCollection'
import CreateNFT from './createNFT/CreateNFT'
import MainPage from './main-page'
import Profile from './profile'

const Main = () => {
	const dispatch = useDispatch()
	return (
		<div
			onClick={() =>
				dispatch(
					closeCategoriesModal(),
					dispatch(closeSupportModal(), dispatch(modalRegisterGlobal())),
				)
			}
		>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/categories' element={<Categories />} />
				<Route path='/createNFT' element={<ProtectedRoute><CreateNFT /></ProtectedRoute>} />
				<Route path='/aboutNFT' element={<AboutNFT />} />
				<Route path='/userOffer' element={<UserOffer />} />
				<Route path='/paymentRules' element={<PaymentRules />} />
				<Route path='/createCollection' element={<ProtectedRoute><CreateNewCollection /></ProtectedRoute>} />
				<Route path='/profile/*' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                <Route path='/profile/settings/*' element={<ProfileSetting />} />
				<Route path='/createCollection' />
			</Routes>
		</div>
	)
}

export default Main
