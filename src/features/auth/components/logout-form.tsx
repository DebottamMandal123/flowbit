"use client"

import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"
import { Loader } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

export const LogoutForm = () => {
    const router = useRouter();
    const [isPending, setIsPending] = useState(false);

    const handleLogout = async () => {
        setIsPending(true);
        try {
            await authClient.signOut({
                fetchOptions: {
                onSuccess: () => {
                    router.push("/login");
                    router.refresh();
                },
                },
            });
        } 
        catch (error) {
            const err = error as Error
            console.error("Logout failed:", err);
            toast.error(err?.message || "Something went wrong while logging out");
        }
        finally{
            setIsPending(false);
        }
    }

    return (
        <div>
            <Button
                type="submit"
                disabled={isPending}
                onClick={handleLogout}
            >
                {isPending && (
                    <Loader className="h-4 w-4 animate-spin" />
                )}
                {isPending ? "Logging out ..." : "Logout"}
            </Button>
        </div>
    )
}