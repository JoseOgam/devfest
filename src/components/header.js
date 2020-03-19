import { Link, graphql, useStaticQuery } from "gatsby"
import './header.styles.scss';
import PropTypes from "prop-types"
import React from "react"


const Header = () => {

  const data = useStaticQuery(graphql`
       query {
           site{
               siteMetadata {
                   title
               }
           }
       }
    `)
  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Anonymous+Pro|Open+Sans&display=swap" rel="stylesheet"/>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            crossOrigin="anonymous"/>

      <div className="header-main">
        <div className="dev">
          <h1>{data.site.siteMetadata.title}</h1>
          <span className="dot">•</span>
          <span className="attr">Front-End Developer</span>
          <span className="dot">•</span></div>
        <div className="icons">
          <a href='https://github.com/pachicodes' target="_blank" rel="noopener noreferrer"><i
            className="fab fa-github"></i></a>
          <a href='https://twitter.com/pachicodes' target="_blank" rel="noopener noreferrer"><i
            className="fab fa-twitter"></i></a>
          <a href='https://dev.to/pachicodes' target="_blank" rel="noopener noreferrer"><i
            className="fab fa-dev"></i></a>
          <a href='https://www.linkedin.com/in/pachicodes/' target="_blank" rel="noopener noreferrer"><i
            className="fab fa-linkedin"></i></a>
        </div>
        <span className="pages-link"><Link to="/">Portfolio</Link>
                        |
                        <Link to="/">Blog</Link>
                        |
                        <Link to="/">About</Link>
                        </span>


        <hr/>
      </div>
    </div>
  )
}

export default Header