import { SignupForm } from "@/features/auth/components/signup-form"
import { requireUnauth } from "@/lib/auth-utils"

const Page = async () => {
    await requireUnauth();

    return (
        <div className="flex justify-center items-center min-h-screen">
            <SignupForm />
        </div>
    )
}

export default Page