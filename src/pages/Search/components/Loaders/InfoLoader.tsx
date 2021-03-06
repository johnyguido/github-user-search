import React from "react"
import ContentLoader from "react-content-loader"

const InfoLoader = () => (
  <ContentLoader 
    speed={2}
    width={670}
    height={360}
    viewBox="0 0 670 260"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="0" y="0" rx="2" ry="2" width="670" height="260" />
  </ContentLoader>
)

export default InfoLoader;