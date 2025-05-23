
import Login from '../../features/auth/Login'
import PublicationList from '../../features/publications/publicationList/PublicationList'
import Register from '../../features/auth/Register'
import PurchaseDetails from '../../features/publications/purchaseDetails/PurchaseDetails'
import SellerDashboard from '../sellerDashboard/SellerDashboard'



{/* Home (por ahora contendra todos los componentes) */}
const Dashboard = ({ publicaciones }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full py-10">
            <PublicationList publicaciones={publicaciones}/>
            <SellerDashboard />
            {/*<MyPosts />*/}
            <Register />
            <Login />
            <PurchaseDetails />
        </div>
    )
}

export default Dashboard
