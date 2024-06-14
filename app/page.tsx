import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  DotsThree as DotsThreeIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusIcon, PlayIcon } from "@radix-ui/react-icons";
import { ThemeToggle, ThemeToggleAlt } from "@/components/theme/theme-toggle";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { SignIn, SignOut } from "@/components/auth/components";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth()

  return (
    <main className="px-4 py-12 grid gap-4 max-w-3xl mx-auto divide-y">
      <section className="p-4 grid gap-2">
        <p className="text-7xl font-semibold">Components</p>
        <p className="text-primary/75 mb-8">An example using shadcn ui</p>
        <div className="text-sm grid gap-2">
          <span>
            built by{" "}
            <Link
              href={"https://github.com/jdboachie"}
              className="text-xs bg-secondary p-1 px-1.5 rounded-full"
            >
              @jdboachie
            </Link>
          </span>
        </div>
        <div className="grid text-sm gap-1">
          <p className="text-lg font-semibold">Resources</p>
          <span>
            Icons:{" "}
            <Link
              className="underline underline-offset-2"
              href={"https://www.radix-ui.com/icons"}
            >
              radix-ui.com/icons
            </Link>
          </span>
          <span>
            UI Library:{" "}
            <Link
              className="underline underline-offset-2"
              href={"https://www.ui.shadcn.com/docs/icons"}
            >
              ui.shadcn.com/docs/component
            </Link>
          </span>
        </div>
      </section>
      <section className="grid gap-2 p-4">
        <div className="grid gap-1">
          <p className="text-2xl font-semibold">Buttons</p>
          <p className="text-sm">Buttons may be with or without icons</p>
        </div>
        <div className="flex gap-2">
          <Button variant={"outline"}>
            <PlusIcon className="mr-2" />
            <span>New file</span>
          </Button>
          <Button>
            <PlayIcon className="mr-2" />
            <span>Run query</span>
          </Button>
          <AlertDialog>
            <AlertDialogTrigger>
              <Button variant={"destructive"}>Remove connection</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently remove the
                  connection and remove the data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="flex gap-2">
          <ThemeToggle />
          <ThemeToggleAlt />
        </div>
      </section>
      <section className="p-4 grid gap-2">
        <div className="grid gap-1">
          <p className="text-2xl font-semibold">Data entry</p>
          <p className="text-sm">inputs, mostly</p>
        </div>
        <div className="grid">
          <Input type="text" placeholder="untitled.sql" className="bg-input" />
        </div>
      </section>
      <section className="p-4 grid gap-2">
        <div className="grid gap-1">
          <p className="text-2xl font-semibold">User Avatar</p>
          <p className="text-sm">
            Displays the current user with the persons info
          </p>
        </div>
        <div className="grid">
          {session?.user ?
          <div className="w-full">
            <DropdownMenu>
              <DropdownMenuTrigger className="w-full p-2">
                <Button size="default" variant={'ghost'} className="flex px-1 w-full justify-between  h-10">
                  <div className="flex gap-2 items-center">
                    <Avatar className="border">
                      <AvatarImage src={session?.user.image || 'jude.png'} alt="@shadcn" />
                      <AvatarFallback>JB</AvatarFallback>
                    </Avatar>
                    <div className="grow pt-0.5">
                      <p className="text-sm truncate">{session?.user.name}</p>
                    </div>
                  </div>
                  <DotsThreeIcon className="size-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full min-w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                {/* <DropdownMenuSeparator /> */}
                <DropdownMenuItem>Profile</DropdownMenuItem>
                {/* <DropdownMenuItem>Billing</DropdownMenuItem> */}
                {/* <DropdownMenuItem>Team</DropdownMenuItem> */}
                {/* <DropdownMenuItem>Subscription</DropdownMenuItem> */}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="p-0">
                  <SignOut />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          :
          <SignIn />
          }
        </div>
      </section>
      <section>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Connections</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
