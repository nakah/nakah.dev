import React, { Fragment } from "react"
import { Styled, css } from "theme-ui"

const Footer = ({ socialLinks }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
      display: "flex",
      whiteSpace: "pre-wrap",
    })}
  >
    © {new Date().getFullYear()}, Powered by&nbsp;
    <Styled.a href="https://www.gatsbyjs.org">Gatsby</Styled.a>
    <div css={css({ flex: "1 1 auto" })} />
    {socialLinks.map((platform, i, arr) => (
      <Fragment key={platform.url}>
        <Styled.a href={platform.url} target="_blank" rel="noopener noreferrer">
          {platform.name}
        </Styled.a>
        {arr.length - 1 !== i && <Fragment>&nbsp;&bull;&nbsp;</Fragment>}
      </Fragment>
    ))}
  </footer>
)
export default Footer
