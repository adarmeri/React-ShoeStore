import styled from "styled-components";

export default function Owner(prop) {
    
    const Div = styled.div`
    border: 2px outset green;
    text-align: center;
    width: 450px;
    height: 400px;
`;



    return (
      <> 
        <center>
            <tr>
                <td>
                    <Div>
                        <h1>{prop.role}</h1>
                        <h1>name: {prop.name}</h1>
                        <h2>{prop.year} years  in the business </h2>
                        <img height={200} width={300} src={prop.img}/>
                    </Div>
            
                </td>
            </tr>


        </center>
      </>
    )
  }