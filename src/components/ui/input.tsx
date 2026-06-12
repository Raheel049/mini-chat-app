import * as React from "react"
import { cn } from "@/lib/utils"

// 'forwardRef' ka istemal karein
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => { // 'ref' yahan receive hoga
    return (
      <input
        type={type}
        data-slot="input"
        ref={ref} // <--- 'ref' ko yahan connect karein
        className={cn(
          "h-9 w-full min-w-0 rounded-3xl border border-transparent bg-input/50 px-3 py-1 text-base...",
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = "Input" // Debugging ke liye naam zaruri hai

export { Input }
