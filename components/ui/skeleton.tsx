import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-md bg-gradient-to-r from-transparent via-primary/5 to-transparent",
        "relative before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-primary/5 before:to-transparent",
        "isolate overflow-hidden shadoww before:border-y before:border-primary/5",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
