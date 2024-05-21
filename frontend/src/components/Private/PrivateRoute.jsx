import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthStatus, selectLoggedInUser } from '../../redux/auth/AuthSlice';
import Lottie from "lottie-react";
import { loadingpage } from '../animation';



export default function PrivateRoute({ element }) {
    const authStatus = useSelector(selectAuthStatus);
    const currentUser = useSelector(selectLoggedInUser);

    if (authStatus === 'pending' || authStatus === 'idle') {
   
        // You might want to return a loading spinner or something similar here
        return  (
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
            <Lottie
              style={{ width: "14rem", height: "16rem" }}
              animationData={loadingpage}
              loop={true}
            />
            </div>
        ) ;
    }
    if (authStatus === 'rejected' ) {
   
        // You might want to return a loading spinner or something similar here
        return  <Navigate to='/' />
    }

    return currentUser ? element : <Navigate to='/' />;
}
