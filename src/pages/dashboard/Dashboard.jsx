
import Login from '../../features/auth/Login'
import PublicationList from '../../features/publications/publicationList/PublicationList'
import Register from '../../features/auth/Register'
import PurchaseDetails from '../../features/publications/purchaseDetails/PurchaseDetails'
import SellerDashboard from '../sellerDashboard/SellerDashboard'
import SobreNosotros from '../../components/shared/pageFooter/sobreNosotros/sobreNosotros'
import FAQ from '../../components/shared/pageFooter/FAQ/FAQ'
import TermsAndConditions from '../../components/shared/pageFooter/terminosPolitica/TerminosPolitica'
import HelpResources from '../../components/shared/pageFooter/recursosUtiles/RecursosUtiles'
import MyPosts from '../../components/shared/myPosts/MyPosts'
import Carousel from '../../components/shared/carousel/Carousel'



{/* Home (por ahora contendra todos los componentes) */}
const Dashboard = ({ publicaciones }) => {
    return (
        <div className="items-center justify-center w-full py-10">
            <PublicationList publicaciones={publicaciones}/>
            <Carousel />
            <SellerDashboard />
            <SobreNosotros/>
            <FAQ/>
            <TermsAndConditions/>
            <HelpResources/>
            <Register />
            <Login />
            <PurchaseDetails />
            <MyPosts />
        </div>
    )
}

export default Dashboard
