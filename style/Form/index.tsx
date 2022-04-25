import styled from 'styled-components'

export const Form = styled.div`
  font-weight: normal;
  color: darkblue;
  font-size: 35px;
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
  grid-row-gap: 42px;
`
export const Head = styled.div`
  width: 57px;
  height: 28px;
  text-align: left;
  font: normal normal 600 20px/30px Poppins;
  letter-spacing: 0.63px;
  color: #1d2e88;
  grid-row-gap: 17px;
`
export const EmailInput = styled.input`
  max-width: 450px;
  min-height: 64px;
  padding-left: 30px;
  border: 1px solid #000000;
  border-radius: 15px;
  opacity: 0.3;
`
export const PassInput = styled.input`
  max-width: 450px;
  min-height: 64px;
  padding-left: 30px;
  border: 1px solid #000000;
  border-radius: 15px;
  opacity: 0.3;
`
export const Button = styled.button`
  width: 178px;
  height: 64px;
  color: white;
  background: #1d2e88 0% 0% no-repeat padding-box;
  border-radius: 15px;
  opacity: 1;
`
export const HorizontalBar = styled.hr`
  width: 100px;
  height: 0px;
  border: 2px solid #1d2e88;
  opacity: 1;
`
export const ForgotTxt = styled.div`
  font-size: 20px;
`

export const Action = styled.div`
  width: 700px;
  display: flex;
  gap: 90px;
  height: 64px;
  align-items: center;
`
export const Footer = styled.div`
  text-align: left;
  font: normal normal normal 16px/25px Poppins;
  letter-spacing: 0.3px;
  color: #272727d9;
  opacity: 1;
`
// export const Span = styled.img``
