import styled from 'styled-components';

export const LoginWrapper = styled.div`
position: absolute;
left: 0;
right: 0;
bottom: 0;
top: 70px;
background: #eee;
`;

export const LoginBox = styled.div`
width: 350px;
height: 450px;
margin: 30px auto;
background: #fff;
box-shadow: 0 0 8px rgba(0,0,0,.1);
`;

export const Input = styled.input`
display: block;
border: none;
width: 200px;
height: 30px;
line-height: 30px;
padding: 0 10px;
margin: 15px auto;
border-radius: 10px;
background: #e0e0e0;
`;

export const Botton = styled.div`
width: 100px;
height: 30px;
line-height: 30px;
border-radius: 15px;
margin: 100px auto 0;
text-align: center;
cursor: pointer;
background: #e0e0e0;
`;

export const Loginfail = styled.div`
width: 200px;
height: 30px;
line-height: 30px;
margin: auto auto;
text-align: center;
color: red;
`;

export const Logintitle = styled.div`
height: 100px;
line-height: 100px;
font-size:30px;
margin: 10px auto;
text-align: center;
`;