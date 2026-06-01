"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-[#333336] h-[1px] w-full", // Yahan color aur height hardcode kar di
        orientation === "vertical" ? "w-[1px] h-full" : "h-[1px] w-full",
        className
      )}
      {...props}
    />
  )
}

export { Separator }