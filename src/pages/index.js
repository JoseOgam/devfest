import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import portfolioItems from "../components/portfolio-items"
import "../styles/index.css"


function renderFolio() {
  return portfolioItems.map(({ title, sinopsis, idx, desc, repo, live, img }) => {
    console.log(title)
    return (


      <div key={"div" + idx} className="tab">
        <input key={"index" + idx} type="checkbox" id={idx + title}/>
        <label key={"label" + idx} className="tab-label" htmlFor={idx + title}> <span key={"pTit" + idx}
                                                                                  className='folio-title'>{title} </span>
          <span key={"dot" + idx} className='folio-title'>· </span>
          <span key={"pSinop" + idx} className='folio-sinopsis'>{sinopsis}</span></label>
        <div key={"tab" + idx} className="tab-content">
          <img alt="nicasia" src={img}/>
          {desc}
          <span className="repolinks" key={"repo" + idx}><a key={"repoLink" + idx} href={repo}>Github Repo</a></span>

          {live ? <span className="repolinks" key={"live" + idx}><a key={"liveLink" + idx} href={repo}>Check it live</a></span> : null}


        </div>
      </div>


    )
  })
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <h1>welcome to my portfolio</h1>
    {renderFolio()}
  </Layout>
)

export default IndexPage
