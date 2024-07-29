import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

export const StatemetnWrapper = styled.div`
position: relative;
min-height: 100%;
margin: 0 auto;
padding: 30px 0 0 30px;
overflow: hidden;
`;

export const Statementtitle = styled.div`
width: 300px;
font-size: 20px;
&.text {
  margin: 20px 0 0 30px;
}
`;

export const StatementoptionWapper = styled.div`
margin: 20px 0 0 25px;
overflow: hidden;
display: flex;
`;

export const Statementindex = styled.div`
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

export const Statementcheckbox = styled.div`
min-width: 400px;
height: auto;
padding: 0 5px;
line-height: 30px;
border-radius: 7px;
font-size: 18px;
border: none;
background: #e0e0e0;
float: left;
`

export const Statementbutton = styled.div`
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
`;

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

export const Chartselect = styled.div`
margin-left: 10px;
display: flex;
`;

export const Option = styled.div`
width: 70px;
`