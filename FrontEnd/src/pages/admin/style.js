import styled from 'styled-components';

export const AdminWrapper = styled.div`
position: relative;
width: 100%;
min-height: 100%;
margin: 0 auto;
overflow: hidden;
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
min-height: 80vh;
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

export const Componentinfo = styled.div`
padding: 0 5px;
line-height: 30px;
min-height: 30px;
min-width: 320px;
border-radius: 7px;
font-size: 18px;
background: #e0e0e0;
&.content {
margin-top: 20px;
}
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

export const customStyles = {
  container: (provided) => ({
    ...provided,
    width: '350px',
  }),
  control: (provided) => ({
    ...provided,
    border: '1px solid #ccc',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #aaa',
    },
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 1000, //on top
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#ddd' : '#fff',
    color: state.isSelected ? '#333' : '#000',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#333',
  }),
};