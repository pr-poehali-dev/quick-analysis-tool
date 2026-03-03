import { useEffect, useState } from "react"
import { Warp } from "@paper-design/shaders-react"

export function LiquidMetalBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="absolute inset-0 -z-10 bg-[#020d1a]" />
  }

  return (
    <div className="absolute inset-0 -z-10">
      <Warp
        style={{ width: "100%", height: "100%" }}
        color1="hsla(210, 100%, 6%, 1)"
        color2="hsla(200, 80%, 20%, 1)"
        color3="hsla(195, 60%, 35%, 1)"
        scale={0.5}
        rotation={0}
        speed={0.1}
        proportion={0.4}
        softness={1}
        distortion={0.15}
        swirl={0.4}
        swirlIterations={6}
        shapeScale={0.1}
        shape={0}
      />
    </div>
  )
}