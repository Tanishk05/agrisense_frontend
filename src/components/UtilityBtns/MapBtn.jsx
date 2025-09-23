"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MapBtn = () => {
  return (
    <Link href={"https://agrisense-map.onrender.com"}>
    <Image
        src="https://cdn3d.iconscout.com/3d/premium/thumb/green-electricity-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--eco-bulb-energy-renewable-ecology-pack-nature-illustrations-3105188.png"
        alt="Info"
        className="h-8 w-8"
        height={500}
        width={500}
      />
    </Link>
  )
}

export default MapBtn