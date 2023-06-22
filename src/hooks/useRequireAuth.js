import { useRouter } from "next/router";
import { useAuth } from "@hooks/useAuth";
import { useEffect } from "react";

const useRequireAuth = () => {
    const router = useRouter();
    const { user } = useAuth();

    useEffect(() => {
        if (!user) {
            router.push("/");
        }
    }, [user, router]);
    if (!user) {
        return null;
    }
    return user;
};
export default useRequireAuth;
