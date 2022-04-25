import { Form, Head, EmailInput, PassInput, Button, HorizontalBar, ForgotTxt, Action, Footer } from '../../style/Form'
// import google from 'assets/images/Ellipse 63.png'

const Forms = () => {
  return (
    <Form>
      <Head>
        Login<HorizontalBar></HorizontalBar>
      </Head>
      <EmailInput placeholder="Enter Email-Address"></EmailInput>
      <PassInput placeholder="Password"></PassInput>

      <Action>
        <Button >LogIn</Button>
        <ForgotTxt> Forgot Password?</ForgotTxt>
      </Action>
      <Footer>or LogIn with</Footer>
      {/* <Span src={google} alt="load"></Span> */}
    </Form>
  )
}

export default Forms
