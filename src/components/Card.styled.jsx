import styled from '@emotion/styled'

export const CardConteiner = styled.div`
margin-top: 60px;
margin-right: auto;
margin-left: auto;
position: relative;
width: 380px;
padding-top: 28px;
padding-bottom: 36px;

background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;
`

export const Logo = styled.img`
    position: absolute;  
    top: 20px;
    left:20px;
`

export const Message = styled.img`
width: 308px;
display: block;
margin-left: auto;
margin-right: auto;
`

export const Line = styled.div`
position: relative;
height: 8px;
margin-top: 18px;
margin-bottom: 62px;
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;

`

export const Boy = styled.img`
display: block;
width: 90px;
height: 90px;
position: absolute;
left: calc(50% - 45px);
top: -36px;
`

export const Text = styled.p`
margin-bottom: 16px;

text-align: center;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;

color: #EBD8FF;
`

export const BtnAdd = styled.button`
width: 196px;
display: block;
margin-top: 26px;
margin-right: auto;
margin-left: auto;
padding: 14px 56px;
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
border: none;
cursor: pointer;
&:hover, &:focus {
    scale: 1.02;
}
`

export const BtnAdded = styled.button`
width: 196px;
display: block;
margin-top: 26px;
margin-right: auto;
margin-left: auto;
padding: 14px 28px;
gap: 6px;

background: #5CD3A8;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
border: none;
cursor: pointer;
&:hover, &:focus {
    scale: 1.02;
}
`


export const ButtonName = styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;

text-transform: uppercase;

color: #373737;

flex: none;
order: 0;
flex-grow: 0;
`
