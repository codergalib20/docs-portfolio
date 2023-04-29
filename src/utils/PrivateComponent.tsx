import Spinner from "@/lib/spinner";
import { useAuth } from "../hooks/useAuth";

const PrivateComponent = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <Spinner />;
    }

    if (!user) {
        return <Redirect to="/login" />;
    }

    return <div>Hello, {user.name}!</div>;
};
