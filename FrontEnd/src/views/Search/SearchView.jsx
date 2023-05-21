"use client";

import { getImageSearch } from "@/api/fetchApi";
import { GET_LIST_IMAGE_SEARCH } from "@/components/constants/queryKey";
import { useSearchParams } from "next/navigation";
import { useQuery } from "react-query";

const SearchView = () => {
  const params = useSearchParams();
  const keyword = params.get("keyword");
  const { data } = useQuery({
    queryKey: [GET_LIST_IMAGE_SEARCH, keyword],
    queryFn: async () => {
      return getImageSearch(keyword);
    },
  });
  const listImage = data?.content;
  if (!listImage) {
    return <div className="p-3">không tìm thấy kết quả "{keyword}"</div>;
  }
  return (
    <div className="p-3 list-image grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 my-2 lg:mx-40 md:mx-32 sm:mx-24 mx-12">
      {listImage.map((img) => (
        <div key={img.image_id} className="image-item">
          <img src={img.image_url} className="rounded-xl" />
          <div className="text-center">{img.image_name}</div>
        </div>
      ))}
    </div>
  );
};

export default SearchView;
