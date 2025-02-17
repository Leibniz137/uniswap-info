import { Box as RebassBox } from 'rebass'
import styled, { css } from 'styled-components'

const panelPseudo = css`
  :after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    height: 10px;
    background-color: inherit;
  }

  @media only screen and (min-width: 40em) {
    :after {
      content: unset;
    }
  }
`

const Panel = styled(RebassBox)`
  position: relative;

  ${props => (props.area ? `grid-area: ${props.area};` : null)}

  ${props =>
    props.grouped &&
    css`
      @media only screen and (min-width: 40em) {
        &:first-of-type {
          border-radius: 10px 10px 0 0;
        }
        &:last-of-type {
          border-radius: 0 0 10px 10px;
        }
      }
    `}

  ${props =>
    props.rounded &&
    css`
      border-radius: 10px 10px 0 0;
      @media only screen and (min-width: 40em) {
        border-radius: 10px;
      }
    `};

  ${props => !props.last && panelPseudo}
`

export default Panel
