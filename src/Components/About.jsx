import styled from "styled-components";
import Owner from "./Owner";

const H1 = styled.h1`
font-family: verdana;
font-size: 300%;
`;

const Div = styled.div`
border: 2px outset red;
text-align: center;
width: 600px;
height: 500px;
`;

export default function About() {
    return (
      <> 
        <center>
            <H1>About</H1>
            <table>
                <tr>
                    <td>
                    <Owner role="owner" name="Yossi" year = "16" img="https://purepng.com/public/uploads/large/businessman-1aq.png"/>
                    </td>
                    <td>
                    <Owner role="owner" name="Avi" year = "14" img="https://freepngimg.com/download/businessman/4-businessman-png-image.png"/>
                    </td>
                </tr>
            </table>
        </center>
      </>
    )
  }
  