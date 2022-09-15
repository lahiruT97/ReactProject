import styled from "styled-components";

export const DivLeft = styled.div`
  position: absolute;
  right: 90%;
  left: 5%;
  width: 50%;
  bottom: 15%;
  flex: 40%;
 
  @media (max-width: 600px){
    width: 100%;
    text-align: center;
    bottom: 53%;
    left: 0%;
  }

  @media screen and (max-width: 780px) and (min-width: 600px){
    bottom: 2%;
    
  }
`;

export const DivRight = styled.div`
  position: absolute;
  right: 40%;
  left: 60%;
  width: 40%;
  bottom: 15%;
  flex: 40%;
  
  @media (max-width: 600px){
    width: 100%;
    text-align: center;
    left: 0%;
    bottom: 5%;
  }
  @media screen and (max-width: 780px) and (min-width: 600px){
    width: 50%;
    left: 50%;
    
  }
`;

export const Box = styled.div`
    position: relative;
    bottom: 0;
    width: 100%; 
    margin-top:10px;
    
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 30px;
`;

export const Row1 = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 30px;
    height: 350px;
    background-image: linear-gradient(39deg, rgba(222,51,112,1) 0%, rgba(226,80,131,1) 44%, rgba(64,64,64,1) 100%);
    opacity: 0.9;
    backgroundSize: cover;
    position: relative;

    @media (max-width: 600px){
      
      height: 400px;
    }

       
`;

export const Column = styled.div`
    background-color: red;
    flex: 50%;
    text-align: right;

    @media (max-width: 600px){
          flex: 100%;
          text-align: center;
        }

`;

export const Img = styled.img` 
    width: 100%;
    height: 350px;
    position: absolute;
    @media (max-width: 600px){
        height: 400px;
        bottom: 0%;
      }
    
`;

export const H2 = styled.h2`
    font-size: 25px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600;
    text-aling: center;
    width:100%;
    display: block;
    color: white;
    margin-bottom: 10%;
   
    @media (min-width: 600px){
      font-size: 43px;
      font-weight: 700;
      margin-bottom: 6%;
      }
 `;

 export const ImgIcon = styled.i`
  size: 100px;
  padding-left: 40%;
  color: white;

  @media (max-width: 600px){
    size: 50px;
    padding-left: 0px;
    padding-top: 0px;
    padding-left: 0%;
  }
  @media only screen and (max-width: 768px) and (min-width: 600px){
    padding-left: 45%;
  }
  
`;

export const ImgPara = styled.p`
    font-size: 20px;
    letter-spacing: 3px;
    font-family: 'Nunito Sans', sans-serif;
    color: #21cc8f;
    padding-left: 30%;

    @media only screen and (max-width: 600px){
      font-size: 15px;
      text-align: center;
      padding-left: 0%;
    }
    
`;

export const ImgPara2 = styled.p`
    font-size: 40px;
    font-weight: 700;
    font-family: 'Nunito Sans', sans-serif;
    color: white;
    padding-left: 22%;

    @media only screen and (max-width: 600px){
      font-size: 20px;
      text-align: center;
      font-weight: 600;
      padding-left: 0%;
    }
    @media only screen and (max-width: 768px) and (min-width: 600px){
      font-size: 40px;
      padding-left: 16%;
    }
    
 `;

 export const Button = styled.button`
    background-color: #21cc8f;
    color: white;
    font-family: 'Nunito Sans', sans-serif;
    margin-left: 31%;
    border-radius: 5px;
    border-color: none;
    border: 1px #21cc8f;
    outline: 0;
    text-transform: uppercase;
    font-size: 20px;
    cursor: pointer;
    padding: 10px;
    transition: ease background-color 250ms;

    @media (max-width: 600px){
      font-size: 15px;
      text-align: center;
      font-weight: 600;
      margin-left: 0%;
      padding: 5px;
    }

    &:hover {
    background-color: #1daf7c;

    
 }`;

 export const Column0 = styled.div`
    background-color: #de3370;
    flex: 11%;
    text-align: right;

    @media (max-width: 600px){
          flex: 100%;
        }

`;

export const Column1 = styled.div`
    background-color: #de3370;
    padding: 10px;
    flex: 22%;
    text-align: center;

    @media (max-width: 600px){
          flex: 100%;
        }

`;

export const Column2 = styled.div`
    background-color: #de3370;
    padding: 10px;
    flex: 22%;
    text-align: center;

    @media (max-width: 600px){
          flex: 100%;
        }

`;

export const Column3 = styled.div`
    background-color: #de3370;
    padding: 10px;
    flex: 22%;
    text-align: center;

    @media (max-width: 600px){
          flex: 100%;
        }

`;

export const Column4 = styled.div`
    background-color: #db2464;
    padding: 10px;
    flex: 35%;
    text-align: left;
    border-top: 2px solid white;
    
    @media (max-width: 600px){
      flex: 100%;
    }
`;

export const Column5 = styled.div`
    background-color: #db2464;
    padding-right: 150px;
    padding-top: 16px;
    flex: 35%;
    text-align: right;
    border-top: 2px solid white;

    @media (max-width: 600px){
      flex: 100%;
      border-top: none;
      text-align: center;
      padding-right: 0px;
      padding-top: 0px;
      padding-bottom: 15px;
    }
    @media (min-width: 768px){
      flex: 35%;
      text-align: right;
      padding-right: 10px;
      padding-top: 15px;
      padding-bottom: 20px;
    }
`;

export const Heading = styled.h1`
    font-size: 24px;
    color: white;
    margin-bottom: 20px;
    font-weight: bold;
    text-align: center;
    font-family: 'Nunito Sans', sans-serif;

    @media (max-width: 600px){
      font-size: 20px;
    }
`;

export const FooterLink = styled.a`
  color: white;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  font-family: 'Nunito Sans', sans-serif;
   
  &:hover {
      color: #21cc8f;
      transition: 200ms ease-in;
  }
  @media (max-width: 600px){
    font-size: 15px;
  }
`; 

export const Icon = styled.i`
  font-size: 18px;
  padding-right: 10px;

  @media (max-width: 600px){
    font-size: 15px;
  }
`;

export const Li = styled.li`
  text-align: center;
  margin-left: -40px;
`;

export const Ul = styled.ul`
  list-style-type: none;
`;

export const Para = styled.p`
  font-size: 18px;
  font-family: 'Nunito Sans', sans-serif;
  color: white;
  margin-bottom: 20px;
  margin-left: 120px;

  @media (max-width: 600px){
    flex: 100%;
    text-align: center;
    margin-bottom: 0px;
    margin-left: 0px;
    font-size: 15px;
  }
  @media (min-width: 768px){
    flex: 35%;
    text-align: left;
    margin-bottom: 20px;
    margin-left: 10px;
  }
`;

