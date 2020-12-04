import React, { useState, useEffect } from "react"
import MainSection from "../../components/home/MainSection"

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
    </>
  )
}

export default MainContainerHome
