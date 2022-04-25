import styled from 'styled-components'

export const Wrraper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 140px;
`
export const Section = styled.div`
  height: 90vh;
`

export const LeftWrappper = styled.div`
  display: grid;
  width: 100%;
  height: 99vh;
  align-items: center;
  background-repeat: no-repeat;
`
export const BgImage = styled.img`
  height: 86vh;
  width: 100%;
  background-repeat: no-repeat;
`
export const RightWrraper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 20% 7% 13% 50%;
  background-color: #ffffff;
`
export const Div = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 40px max-content;
`

export const Shadow = styled.img`
  grid-column: 2;
  grid-row: 1;
  -webkit-box-pack: right;
  -webkit-justify-content: right;
  -ms-flex-pack: right;
  justify-content: right;
  position: absolute;
  top: -350px;
  left: -600px;
  min-width: 900px;
  min-height: 900px;
`

export const Logo = styled.img`
  height: 9vh;
  display: flex;
  font-size: 20px;
  grid-row: 2;
  background-color: #ffffff;
`
export const Heading = styled.div`
  font-family: 'Poppins', sans-serif;
  font: normal normal bold 20px Poppins;
  background-color: #ffffff;
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: 0.2px;
  text-transform: Titlecase;
  text-align: left;
  opacity: 1;
`
export const Content = styled.div`
  opacity: 6;
  letter-spacing: 0.9px;
  font-weight: 10px;
  font-family: 'Poppins', sans-serif;
`
