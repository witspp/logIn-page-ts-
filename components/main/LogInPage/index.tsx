import {
  Wrraper,
  Section,
  RightWrraper,
  Logo,
  LeftWrappper,
  Heading,
  Content,
  BgImage,
  Shadow,
  Div,
} from '../../style/Login'
import Image from 'assets/images/Image.png'
import logos from 'assets/logos/WitsLogo.png'
import Forms from '../Forms'
import shadow from 'assets/images/Ellipse.png'

const Main = () => {
  return (
    <Wrraper>
      <Section>
        <LeftWrappper>
          <BgImage src={Image} alt="leftImage" />
        </LeftWrappper>
      </Section>

      <RightWrraper>
        <Div>
          <Logo src={logos} alt="leftIma" />
          <Shadow src={shadow} alt="loading" />
        </Div>
        <Heading>Get Started With WIL </Heading>
        <Content>
          Find a job that matched with your ability and interest <br />
          is easier now.
        </Content>

        <Forms />
      </RightWrraper>
    </Wrraper>
  )
}

export default Main
