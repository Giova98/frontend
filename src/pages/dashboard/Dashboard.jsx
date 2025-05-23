
import Login from '../../features/auth/Login'
import PublicationList from '../../features/publications/publicationList/PublicationList'
import Register from '../../features/auth/Register'
import PurchaseDetails from '../../features/publications/purchaseDetails/PurchaseDetails'
import MyPosts from '../../components/shared/myPosts/MyPosts'
import SellerDashboard from '../sellerDashboard/SellerDashboard'



{/* Home (por ahora contendra todos los componentes) */}
const Dashboard = ({ publicaciones }) => {
    return (
        <div className="items-center justify-center w-full py-10">
            <PublicationList publicaciones={publicaciones}/>
            <SellerDashboard />
            {/*<MyPosts />*/}
            <Register />
            <Login />
            <PurchaseDetails />
            <MyPosts/>
        </div>
    )
}

export default Dashboard
