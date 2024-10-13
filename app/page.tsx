"use client";

import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    console.log(session);
  }

  return (
    <>
      <div className="max-w-[1000px] h-screen mx-auto flex justify-center items-center flex-col gap-2">
        <h1 className="text-8xl uppercase font-black text-center mb-4">
          nextauth
        </h1>
        {session ? (
          <p className="mb-4 flex items-center gap-2">
            <Image
              src={session?.user?.image || "/image-par-defaut.png"}
              alt="User Profile Picture"
              width={50}
              height={50}
              className="border-2 border-gray-800 rounded-full"
            />
            Bienvenue {session?.user?.name}
          </p>
        ) : (
          <p className="text-xl text-center mb-4">Vous n&apos;êtes pas connecté.</p>
        )}
        <div className="flex items-center gap-2">
          {!session ? (
            <>
              <button
                onClick={() => signIn("github")}
                className="bg-gray-300 hover:bg-gray-400 rounded-md py-3 px-5 text-base font-medium"
              >
                Se connecter avec Github
              </button>
            </>
          ) : (
            <button
              onClick={() => signOut()}
              className="bg-red-600 hover:bg-red-500 text-gray-100 rounded-md py-3 px-5 text-base font-medium"
            >
              Se déconnecter
            </button>
          )}
        </div>
      </div>
    </>
  );
}
