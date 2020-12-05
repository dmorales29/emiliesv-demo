import React, { useState, useEffect } from "react"
import MainSection from "../../components/home/MainSection"
import SingleSectionLeft from "../../components/home/SingleSectionLeft"
import Banner970x90 from "../../utils/Banne970x90"
import SingleSectionRight from "../../components/home/SingleSectionRight"
import DoubleSection from "../../components/home/DoubleSection"

function MainContainerHome() {
  const [homeData, setHomeData] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const fetchHome = await fetch("http://localhost:1337/homes/")
      const homeData = await fetchHome.json()

      setHomeData(homeData)
      setLoading(true)
    }

    fetchData()
  }, [])

  return (
    <>
      <MainSection data={homeData} loader={loading} />
      <SingleSectionLeft data={homeData} loader={loading} />
      <Banner970x90 />
      <SingleSectionRight data={homeData} loader={loading} />
      <DoubleSection data={homeData} loader={loading} />
    </>
  )
}

export default MainContainerHome
