
"use client";

import Link from "next/link";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import {useRouter} from "next/navigation"
import {useEffect} from "react"
export default function SignInPage() {
// Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push("/week-9/shopping-list");
        }
    }, [user, router]);
    
    // Sign in to Firebase with GitHub authentication
    async function handleSignIn(){
        try {
            await gitHubSignIn();

        } catch (error) {
            console.log(error);
        }
    }

    // Sign out of Firebase
    async function handleSignOut(){
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log (error);
        }
    }

    console.log(user);

    return (
// Display some of the user's information
<main>
    <header>
        <h1>Week 9 - Firebase Authentication with GitHub</h1>
    </header>
    {user ? (
        <section>
            <div>
                <p>
                Welcome, {user.displayName} ({user.email})
                </p>
            </div>
            <div>
                <button type="button" onClick={handleSignOut} className="text-lg bg-blue-500 text-white rounded px-2 py-1 mt-4 hover:bg-blue-600 cursor-pointer">
                    Sign Out
                </button>
            </div>
        </section>
    ) : (
        <button type="button" onClick={handleSignIn} className="text-lg bg-blue-500 text-white rounded px-2 py-1 mt-4 hover:bg-blue-600 cursor-pointer">
            Sign In with GitHub
        </button>
    )}
</main>

    );
}