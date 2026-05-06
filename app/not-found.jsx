"use client"
import React from "react"
import { Button } from "@/components/ui/button"
const NotFound = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center gap-8">
        <h1 className="scroll-m-20 text-center text-9xl font-extrabold tracking-tight text-balance text-primary/80">
          404
        </h1>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-primary/80">
          The page you are looking for is no longer available
        </h4>
        <Button
          size="lg"
          onClick={() => {
            window.location.href = "/"
          }}
        >
          Go to Homepage
        </Button>
      </div>
    </>
  )
}

export default NotFound
