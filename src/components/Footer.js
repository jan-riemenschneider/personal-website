import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import styled from "styled-components";

function Footer() {
  return (
    <FooterSection>
      <FooterContainer>
        <InfoSection>
          <h2>Jan Riemenschneider</h2>
          <p>
            A Frontend Developer building websites and web applications that
            contribute to product success.
          </p>
        </InfoSection>
        <Copyright>
          <p>© 2024 Jan Riemenschneider. All rights reserved.</p>
          <Link href="/about">Impressum</Link>
        </Copyright>
        <ConnectSection>
          <p>Let’s Connect</p>
          <IconList>
            <Link
              href="https://linkedin.com/in/jan-riemenschneider"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledLinkedIn />
            </Link>
            <Link
              href="https://github.com/jan-riemenschneider"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledGithub />
            </Link>
            <Link href="mailto:jan-riemenschneider@outlook.de">
              <StyledToMail />
            </Link>
          </IconList>
        </ConnectSection>
      </FooterContainer>
    </FooterSection>
  );
}

// Styled Components

const FooterSection = styled.section`
  background-color: #3864ab;
  padding: 20px 0;
  color: #ffffff;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const InfoSection = styled.div`
  h2 {
    margin: 0;
    font-size: 1.2rem;
  }

  p {
    margin: 5px 0 0;
    font-size: 1rem;
  }
`;

const Copyright = styled.div`
  font-size: 0.9rem;
  color: #e0e0e0;

  a {
    color: #e0e0e0;
    text-decoration: none;
    margin-left: 10px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ConnectSection = styled.div`
  p {
    margin-bottom: 10px;
    font-size: 1rem;
  }
`;

const IconList = styled.div`
  display: flex;
  gap: 15px;
`;

const StyledLinkedIn = styled(FaLinkedin)`
  width: 25px;
  height: 25px;
  color: #ffffff;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(20deg);
  }
`;

const StyledGithub = styled(FaGithub)`
  width: 25px;
  height: 25px;
  color: #ffffff;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(20deg);
  }
`;

const StyledToMail = styled(IoMail)`
  width: 25px;
  height: 25px;
  color: #ffffff;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(20deg);
  }
`;

export default Footer;
