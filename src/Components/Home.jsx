import styled from "styled-components";

const Img = styled.img `
   @keyframes images {
                        0%   {background-image: url('./src/Img/store1.jpg');}
                        25%  {background-image: url('./src/Img/store2.jpg');}
                        50%  {background-image: url('./src/Img/store3.jpg');}
                        100% {background-image: url('./src/Img/store4.jpg');}
                      }

  width:  500px;
  height: 350px;
  animation-name: images;
  animation-duration: 15s;
  animation-iteration-count:infinite;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-left:15%;

`;

const H1 = styled.h1`
    font-family: verdana;
    font-size: 300%;
`;

const P = styled.p`
    font-size: 18px;
    font-family: 'georgia';
    text-align: center;
    margin-left:-15%;
`;


export default function Home() {

    return (
      <>
        <center>
            <H1>Home</H1>
            <table>
                <tr>
                    <td>
                        <P>You need comfortable footwear at the<br/> office, in the gym, and on out the town.
                            <br/> The vast selection of men's shoes at Shoe Carnival<br/> features the latest trends
                             in big brand athletic <br/>shoes, boots, dress shoes, men's sandals, workwear, and more 
                            <br/>all at prices you won't find elsewhere.</P>
                    </td>

                    <td>
                       <Img/>
                    </td>
                </tr>
            </table>
        </center>
      </>
    )
  }
  