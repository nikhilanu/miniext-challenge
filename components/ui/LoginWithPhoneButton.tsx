import Image from 'next/image';
import PhoneLogo from '@/public/statics/images/phone.svg';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { firebaseAuth } from '../firebase/firebaseAuth';
import PhoneVerification from '@/components/ui/PhoneVerification';
import { useAppDispatch } from '../redux/store';
import { logout } from '../redux/auth/logOut';


const provider = new GoogleAuthProvider();

/**
 * Use this component to trigger Google modal and login with Google account
 * @returns
 */
const LoginWithPhoneButton = () => {
    const dispatch = useAppDispatch();
    const loginWithPhone = async () => {
        try {
            // dispatch(logout());
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <button
            className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
            onClick={loginWithPhone}
        >
            <Image src={PhoneLogo} alt="Phone logo" layout="intrinsic" height={20} width={20} />
            <div className="ml-2">Phone</div>
        </button>
    );
};

export default LoginWithPhoneButton;


// import { useAppDispatch } from '../redux/store';
// import { logout } from '../redux/auth/logOut';
// import PhoneLogo from '@/public/statics/images/phone.svg';
// import PhoneVerification from '@/components/ui/PhoneVerification';

// export default function Logout() {
//     const dispatch = useAppDispatch();
//     const loggedOut = async () => {
//         try {
//             dispatch(logout());
//         } catch (error) {
//             console.log(error, 'error while logout');
//         }
//     };
//     return (
//         // <button
//         //     onClick={loggedOut}
//         //     className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700"
//         // >
//         //     Logout
//         // </button>
//         <button
//             className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
//             onClick={Logout}
//         >
//             <Image src={PhoneLogo} alt="Phone logo" layout="intrinsic" height={20} width={20} />
//             <div className="ml-2">Phone</div>
//         </button>
//     );
// };
