import { signIn, signOut } from "@/auth"
import { Button } from "../ui/button"

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server"
        await signIn(provider)
      }}
    >
      <Button {...props}>Sign In</Button>
    </form>
  )
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
      className="w-full grid"
    >
      <Button variant="ghost" className="flex justify-start py-0 px-2 h-8 rounded font-normal" {...props}>
        Sign out
      </Button>
    </form>
  )
}