import Spinner from "@/lib/spinner";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from 'next/router';
const PrivateComponent = () => {
    const { user, loading } = useAuth();
    const router = useRouter();

    if (loading) {
        return <Spinner />;
    }

    if (!user) {
        return router.push('/login');
    }

    console.log(user);
    return <div>Hello,!</div>;
};
