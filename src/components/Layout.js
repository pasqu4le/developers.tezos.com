import React from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import Header from "./Header"
import CTA from "./CTA"
import Hero from "../components/Hero"
import Footer from "./Footer"
import palette from "../utils/palette"

const Layout = ({ children, location, title, subtitle }) => {
  const globalRules = css`
    h1 {
      color: ${palette.darkBlue};
      font-size: 58px;
      letter-spacing: 2.24px;
      font-weight: 100;
    }
  `;

  return (
    <Container>
      <Global styles={globalRules} />
      <Header />
      <Hero title={title} subtitle={subtitle}>
        {location.pathname === "/" && (
          <div css={css`
            display: flex;
            justify-content: space-evenly;
            width: 552px;
            a + a {
              margin-left: 40px;
            }
          `}>
            <CTA href="#">Build a Node</CTA>
            <CTA href="#">Run a Node</CTA>
          </div>
        )}
      </Hero>
      <Main isHome={location.pathname === "/"}>{children}</Main>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${palette.white};
`

const Main = styled.main`
  width: 100%;
  min-height: calc(100vh - 452px - 90px); /* 100 view height - size of footer (452px) - size of header (90px) */
  transform: ${props => props.isHome ? "translateY(0)" : "translateY(-80px)"};
  background-color: ${palette.white};
`

export default Layout