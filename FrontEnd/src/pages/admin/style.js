import styled from 'styled-components';

export const AdminWrapper = styled.div`
position: relative;
width: 100%;
min-height: 100%;
margin: 0 auto;
overflow: hidden;
`;

export const AdminHead = styled.div`
height: 70px;
border-bottom: 1px solid gray;
`;

export const AdminContent = styled.div`
overflow: hidden;
height: 100%;

`;

export const AdminIndexlist = styled.div`
width: 200px;
height: 100%;
float: left;
`;

export const AdminPage = styled.div`
margin: 0px auto auto 200px;
padding: 30px 0 0 30px;
border-left: 1px solid gray;
height: 100%;
`;

export const Adminpageoption = styled.div`
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

export const ComponentWapper = styled.div`
overflow: hidden;
height: auto;
width: auto;
`;

export const Componenttitle = styled.div`
width: 300px;
font-size: 20px;
`;
export const ComponentoptionWapper = styled.div`
margin: 20px 0 0 25px;
overflow: hidden;
`;

export const Componentindex = styled.div`
text-align: center;
line-height: 30px;
height: 30px;
width: 120px;
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
margin-left: 30px;
background: #e0e0e0;
&.bigbox {
width: 500px;
height: 250px;
}
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
`;

export const Sendresult = styled.div`
color: #00DB00;
margin: 30px;
&.fail {
color: red;
}
`;

export const Adminemployeepageoption = styled.div`
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