'use client'

import { useListImageClient } from "@/components/molecules/ImageList/stately"


const HomeView = () => {
  const listImage = useListImageClient()
  return (
    <div className="list-image grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 my-2 lg:px-40 md:px-32 sm:px-24 px-6">
      {listImage.map(img => (
        <div key={img.image_id} className="image-item">
          <img src={img.image_url} className="rounded-xl"/>
          <div className="text-center">{img.image_name}</div>
        </div>
      ))}
    </div>
  )
}

export default HomeView
