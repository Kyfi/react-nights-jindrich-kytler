import styled from 'styled-components/macro'
import { Link as BaseLink } from 'react-router-dom'
import theme from '../../../../common/theme'

export const Wrapper = styled.li`
  width: 100%;

  @media (min-width: ${theme.breakPoint.sm}) {
    width: auto;
  }
`

export const Link = styled(BaseLink)`
  text-decoration: none;
  color: initial;
  background-color: ${theme.color.white};
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: ${theme.breakPoint.sm}) {
    width: 35rem;
  }

  &:hover {
    box-shadow: ${theme.shadow.basic};
  }
`

export const ImgWrap = styled.div`
  height: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Price = styled.div`
  color: ${theme.color.red};
  font-size: 1.8rem;
  margin-top: 2rem;
`

export const Img = styled.img`
  max-height: 15rem;
  max-width: 100%;
`

export const TitleWrap = styled.div`
  height: 6.7rem;
  overflow: hidden;
`

export const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 100;
  text-transform: uppercase;
`

export const AddButton = styled.button`
  background: ${theme.color.red};
  padding: 1rem;
  margin-top: 0.5rem;
  border: none;
  border-radius: ${theme.radius.basic};
  color: ${theme.color.white};
`