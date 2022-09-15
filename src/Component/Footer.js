import React from 'react'
import { Box,
         Row1,
         Img,
         DivLeft,
         DivRight,
         ImgIcon,
         ImgPara,
         ImgPara2,
         Button,
         Row,
         Column0,
         Column1,
         Column2,
         Column3,
         Column4,
         Column5,
         Heading,
         Ul,
         Li,
         FooterLink,
         Para,
         Icon,
         H2, } from './Design/FooterDes'
import {AnimationOnScroll} from 'react-animation-on-scroll';

const Footer = () => {
  return (
    <div>
      <Box>
        <Row1 style={{
            zIndex: "1" ,
        }}>
            <Img src='img1.jpg' style={{
                zIndex: "0",
                opacity: "0.2",
            }}></Img>
                <DivLeft style={{
                    zIndex: "2",
                }}>
                    <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                        <H2>Call us for further information. "Shiny customer care is here to help you at anytime.</H2>
                    </AnimationOnScroll>
                </DivLeft>
                <DivRight style={{
                    zIndex: "2",
                }}>
                    <AnimationOnScroll animateIn="animate__fadeInRightBig">
                        <ImgIcon className="fa-solid fa-phone" ></ImgIcon><br></br>
                        <ImgPara>CALL US NOW</ImgPara>
                        <ImgPara2>94756756345</ImgPara2>
                        <Button>Contact Us</Button>
                    </AnimationOnScroll>
                </DivRight>
        </Row1>

        <Row>
            <Column0>
            </Column0>
            <Column1>
              <Heading>Our Company</Heading>
              <Ul>
                <Li><FooterLink href="#">About Us</FooterLink></Li>
                <Li><FooterLink href="#">Vision</FooterLink></Li>
                <Li><FooterLink href="#">Mission</FooterLink></Li>
                <Li><FooterLink href="#">Join Us</FooterLink></Li>
              </Ul>
            </Column1>
            <Column2>
              <Heading>Latest News</Heading>
               <Ul>
                <Li><FooterLink href="#">How to Make Your Hair Grow Faster</FooterLink></Li>
                <Li><FooterLink href="#">5 Ways to Make Hair Look Gorgeous</FooterLink></Li>
                <Li><FooterLink href="#">How to Wosh Your Hair</FooterLink></Li>
                <Li><FooterLink href="#">14 Easy Ways to Get Standout Eyes</FooterLink></Li>
              </Ul> 
            </Column2>
            <Column3>
              <Heading>Get In Touch</Heading>
               <Ul>         
                  <Li><FooterLink href="#"><Icon className="fa-brands fa-facebook" />Facebook</FooterLink></Li>
                  <Li><FooterLink href="#"><Icon className="fa-brands fa-youtube" />Youtube</FooterLink></Li>
                  <Li><FooterLink href="#"><Icon className="fa-brands fa-tiktok" />Tiktok</FooterLink></Li>
                  <Li><FooterLink href="#"><Icon className="fa-brands fa-instagram" />Instagram</FooterLink></Li>
              </Ul>
            </Column3>
            <Column0>
            </Column0>
            <Column4>
               <Para>&copy; Copyright 2022 - Shiny by CIOA </Para>  
            </Column4>
            <Column5>
              <FooterLink><Icon style={{padding:"15px"}} className="fa-brands fa-facebook" /></FooterLink>
              <FooterLink><Icon style={{padding:"15px"}} className="fa-brands fa-whatsapp" /></FooterLink>
              <FooterLink><Icon style={{padding:"15px"}} className="fa-brands fa-linkedin" /></FooterLink>
              <FooterLink><Icon style={{padding:"15px"}} className="fa-brands fa-google-plus-g" /></FooterLink>
            </Column5>
        </Row>
      </Box>
    </div>
  )
}

export default Footer
