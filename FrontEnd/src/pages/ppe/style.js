import styled from 'styled-components';

export const PPEWrapper = styled.div`
position: relative;
width: 100%;
min-height: 100%;
margin: 0 auto;
overflow: hidden;
`;

export const PPEIndexlist = styled.div`
width: 200px;
height: 100%;
float: left;
`;

export const PPEPage = styled.div`
margin: 0px auto auto 200px;
padding: 30px 0 0 30px;
border-left: 1px solid gray;
min-height: 80vh;
`;

export const PPEpageoption = styled.div`
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
`;

export const Sendresult = styled.div`
color: #00DB00;
margin: 30px;
&.fail {
color: red;
}
`;

export const PPEinnerpageoption = styled.div`
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

export const CheckItem = styled.div`
display: flex;
align-items: center;
margin: 10px 0;
`;

export const Checkbutton = styled.div`
height: 20px;
width: 20px;
background-color: white;
border: 1px solid #ccc;
cursor: pointer;
display: inline-block;
margin-right: 10px;
&.checked::after {
  content: '✓';
  display: flex;
  height: 20px;
  width: 20px;
  justify-content: center;
  align-items: center;
}
`;

export const DatePickerWrapper = styled.div`
  .react-datepicker {
    font-family: Arial, sans-serif;
    border: 1px solid #ccc;
  }

  .react-datepicker__header {
    background-color: #f0f0f0;
    border-bottom: 1px solid #ccc;
  }

  .react-datepicker__day-name, 
  .react-datepicker__day, 
  .react-datepicker__time-name {
    color: #000;
  }

  .react-datepicker__day--selected, 
  .react-datepicker__day--keyboard-selected {
    background-color: #0066cc;
    color: #fff;
  }

  .react-datepicker__day--today {
    background-color: #ffeb3b;
  }

  .react-datepicker__input-container input {
    width: 170px;
    height: 27px;
    margin-right: 30px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .custom-time-input {
  width: 60px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: 10px;
}
`;