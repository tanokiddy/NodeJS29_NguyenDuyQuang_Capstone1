import { getListImage } from "@/utils/fetchAPI"

export default async function Home() {
  const data = await getListImage()
  const listImage = data.content
  return (
    <div className="list-image grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 my-2 lg:mx-40 md:mx-32 sm:mx-24 mx-12">
      {listImage.map(img => (
        <div className="image-item">
          <img src={img.image_url} className="rounded-xl"/>
          <div className="text-center">{img.image_name}</div>
        </div>
      ))}
    </div>
  )
}
