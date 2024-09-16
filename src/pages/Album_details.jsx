import React, { useEffect, useState } from "react";
import Photos_card from "../component/Photos_card";
import { useParams } from "react-router-dom";
import typicode_instance from "../Services/api";
import Album_layout from "../component/Album_layout";

function Album_details() {
  let { albumsId } = useParams();
  let [al, setAl] = useState([]);
  let[albums, setAlbums]=useState(null)
  async function albumData() {
    try {
      let out1 = await typicode_instance.get(`/albums/${albumsId}`);
      let out2 = await typicode_instance.get(`/albums/${albumsId}/photos`);
      setAl(out2.data);
      setAlbums(out1.data)
      console.log(out1.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    albumData();
  }, []);

  return <div>
    {albums&&<Album_layout userAl={albums} showlink={false}/>}
    {al.map((photos)=><Photos_card album={photos} />)}
    
    </div>;
}

export default Album_details;
