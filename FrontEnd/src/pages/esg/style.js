import styled from 'styled-components';

export const ESGWrapper = styled.div`
position: relative;
width: 100%;
flex-grow: 1;
margin: 0 auto;
overflow: hidden;
display: flex;
`;

export const ESGIndexlist = styled.div`
width: 200px;
height: 100%;
float: left;
`;

export const ESGPage = styled.div`
padding: 30px 0 0 30px;
border-left: 1px solid gray;
flex-grow: 1;
`;

export const ESGpageoption = styled.div`
position: relative;
margin: 1px 10px;
border-radius: 7px;
height: 40px;
text-align: left;
padding: 0 10px;
line-height: 40px;
cursor: pointer;
&.mousein {
  background: #e0e0e0;
}
`

export const ESGinnerpageoption = styled.div`
position: relative;
float: left;
height: 35px;
width: 120px;
text-align: center;
font-size: 18px;
line-height: 35px;
cursor: pointer;
background: #f0f0f0;
&.mousein {
  background: #e0e0e0;
}
`

export const ComponentWapper = styled.div`
height: 100%;
width: auto;
`;

export const Componenttitle = styled.div`
width: 300px;
font-size: 20px;
`;

export const ComponentoptionWapper = styled.div`
margin: 20px 0 0 25px;
display: flex;
align-items: center;
&.contentwarpper {
  justify-content: center;
  margin: 0;
}
&.content {
  flex-direction: column;
}
`;

export const Componentindex = styled.div`
text-align: center;
line-height: 30px;
height: 30px;
width: 120px;
margin-right: 30px;
border-radius: 7px;
font-size: 18px;
background: #e0e0e0;
float: left;
`;

export const Componentinput = styled.input`
padding: 0 5px;
line-height: 30px;
height: 30px;
width: 320px;
border-radius: 7px;
font-size: 18px;
border: none;
outline: none;
background: #e0e0e0;
`;

export const Componentbutton = styled.div`
text-align: center;
margin: 20px 30px 0 0;
line-height: 30px;
height: 30px;
width: 120px;
border-radius: 7px;
font-size: 18px;
cursor: pointer;
float: left;
background: #d0d0d0;
&.reject {
  color: red;
}
&.selectall {
  margin: 0 0 0 30px;
}
`;

export const Componentcheckbox = styled.div`
width: 400px;
min-height: 250px;
padding: 0 5px;
line-height: 30px;
border-radius: 7px;
font-size: 18px;
border: none;
background: #e0e0e0;
float: left;
`