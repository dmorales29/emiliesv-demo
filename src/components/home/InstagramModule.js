import React, { useState, useEffect } from "react"
import instagramModuleStyles from "./instagramModule.module.css"
import { AiOutlineInstagram } from "react-icons/ai"

function InstagramModule() {
  function slimData(response) {
    return response.data.user.edge_owner_to_timeline_media.edges.map(edge => ({
      thumbnail: edge.node.thumbnail_src,
      url: `https://www.instagram.com/p/${edge.node.shortcode}`,
      id: edge.node.id,
    }))
  }

  const url = `https://www.instagram.com/graphql/query/?query_hash=bfa387b2992c3a52dcbe447467b4b771&variables={"id":"2245877612","first":7}`
  const fetchData = () => {
    return fetch(url)
      .then(response => response.json())
      .then(response => slimData(response))
      .catch(error =>
        console.error(
          "There has been a problem with your fetch operation:",
          error
        )
      )
  }

  //Revisar por qué imprime 2 veces
  //console.log(fetchData())

  const [iGData, setIGData] = useState([])
  useEffect(() => {
    fetchData().then(data => setIGData(data))
  }, [])

  return (
    <section className={instagramModuleStyles.container}>
      <a
        href="https://www.instagram.com/emilie.sv/"
        className={instagramModuleStyles.a}
        target="_blank"
      >
        <AiOutlineInstagram size="20px" />
        <span>emilie.sv</span>
      </a>
      <div className={instagramModuleStyles.photosContainer}>
        {iGData.map(img => (
          <a key={img.id} href={img.url} target="_blank">
            <img src={img.thumbnail} />
          </a>
        ))}
      </div>
    </section>
  )
}

export default InstagramModule
