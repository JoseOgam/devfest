import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/contact.css"

const Contact = () => (
  <Layout>
    <SEO title="Contact"/>
    <div className="content">
      <h2 className="h2">Have me in your team...
      </h2>
      <div>
        <h3>Reach me out at</h3>
        <ul>
          <li><h4>Phone</h4>
            <h5 className="h5">
              +254700013671 <br/> +254733989993
            </h5>
            </li>
        </ul>
        <hr/>
        <ul>

        </ul>
      </div>

    </div>
  </Layout>
)

export default Contact