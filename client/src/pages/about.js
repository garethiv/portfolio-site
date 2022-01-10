import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({location}) => (
  <Layout location={location}>
    <Seo title="About" />

    <div 
      style={{
        display: `flex`,
        // borderStyle: `solid`,
        // borderColor: `blue`,
        height:`80vh`,
        flexDirection:`column`,
        marginBottom: `2rem`,
        marginTop:`2rem`
    }}>    
      
      <div
          className="circle"
          style={{
            backgroundColor: `#38A700`,
            width: `12rem`,
            height: `12rem`,
            left: `65%`,
            top:`22%`,
            position:`absolute`,
            borderRadius:`50%`,
            zIndex: `5`
          }}
        />

      {/* top */}
      <div 
        style={{
          display: `flex`,
          flexDirection:`column`,
          justifyContet: `center`,
          // borderStyle: `solid`,
          // borderColor: `green`,
          // height: `35%`
        }}>
        <h1 style={{
          color: `white`,
          fontSize: `7vw`,
          marginBlockEnd:`0em`,
          marginBlockStart:`0em`,
          padding: `2rem 0 0 8rem`
        }}>
          FULL STACK
        </h1>
        {/* <div 
          className='horizontal'
          style={{ 
            background:`#707070`,
            height:`1px`,
            marginLeft: `4rem`,
            width:`46%`,
            opacity: .3,
            transformOrigin: `0 50%` }} 
        /> */}
        <div style={{display: `flex`, flexDirection:`row`}}>
          <h1 style={{
            color: `white`,
            fontSize: `7vw`,
            marginBlockEnd:`0em`,
            marginBlockStart:`0em`,
            paddingLeft: `8rem`
          }}>
            DEVELOPER
          </h1>    
        </div>
      </div>

      {/* bottom */}
      <div 
        style={{
          display: `flex`,
          flexDirection:`row`,
          justifyContent:`space-between`,
          // marginTop: `1rem`  
          // borderStyle: `solid`,
          // borderColor: `yellow`,
          // height: `50%`
        }}>

        {/* left */}
        <div 
          style={{
            display: `flex`,
            flexDirection:`column`,
            // borderStyle: `solid`,
            // borderColor: `pink`,
            width:`33%`
          }}>

          <p 
            style={{
              fontFamily:`Montserrat`,
              color: `white`,
              padding: `5rem 0 0 6.5rem`,
              fontSize:`1.5vw`,
              lineHeight:`0`
          }}>
            A BIT ABOUT MYSELF, </p>
            <p 
            style={{
              fontFamily:`Cabin`,
              color: `white`,
              padding: `2rem 0 0 6.5rem`,
              fontSize:`0.75vw`,
              marginTop: `0`,
              lineHeight:`0`
          }}>
            and what I do.</p>

          <p 
            style={{
              color: `white`,
              padding: `3rem 0 0 6.5rem`,
              marginTop:`1rem`
          }}>
            I'm Gareth - full stack developer (and occasional designer). My passions 
            centre around engineering, design, and the 
            creative experience of technology. </p>
          <p 
            style={{
              color: `white`,
              padding: `3rem 0 0 6.5rem`
          }}>
            I have industry experience in Python
            back-end engineering and full-stack
            web development. I'm constantly building
            projects to teach myself new skills. I'm currently
            learning web3, blockchain, web 
            animation, and ui/ux design.</p>

        </div>

        {/* right */}
        <div 
          style={{
            display: `flex`,
            flexDirection:`row`,
            marginTop: `3.5rem`,
            // borderStyle: `solid`,
            // borderColor: `white`,
            // justifyContent:`space-around`,
            width:`60%`,
          }}>

          <div 
          style={{
            display: `flex`,
            }}>
            <div
              className="circle"
              style={{
                marginTop: `2.5rem`,
                marginRight: `10rem`,
                width: `25rem`,
                height: `25rem`,
                borderRadius:`50%`,
                borderColor: `#2F2F2F`,
                borderStyle: `solid`,
                borderWidth: `1px`
              }}
            />
          </div>
          
          <StaticImage
            src="../images/about.jpg"
            width={400}
            height={550}
            quality={90}
            formats={["auto", "webp", "avif"]}
            alt="About image"
            style={{ marginBottom: `1.45rem`, marginLeft: `5rem` }}
          />

        </div>

      </div>

    </div>

  </Layout>
)

export default About
