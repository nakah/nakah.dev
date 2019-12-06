import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Blog personnel par{" "}
    <Styled.a href="http://mobile.twitter.com/nakah">Hakan Altinbasak</Styled.a>
    .
    <br />
    Je partage du code/tutos/expériences de manière simple
  </Fragment>
)
