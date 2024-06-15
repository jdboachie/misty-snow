import { Button } from "../ui/button"
import { signOut, signIn } from "next-auth/react";


export function SignIn () {
  return (
  <Button
    variant={'ghost'}
    className="p-0 px-1.5 flex justify-start font-normal"
    onClick={() => signIn()}
  >
    Sign In
  </Button>
  )
}

export function SignOut () {
  return (
    <Button
      variant={'ghost'}
      className="p-0 px-1.5 flex justify-start font-normal"
      onClick={() => signOut()}
    >
      Sign Out
    </Button>
  )
}
