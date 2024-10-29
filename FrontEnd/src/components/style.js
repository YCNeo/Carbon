import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
/////////////////////////////////////main////////////////////////////////////////
export const MainWrapper = styled.div`
width: 100%;
flex-grow: 1;
margin: 0 auto;
display: flex;
&.context {
  flex-direction: column;
}
`;

export const MainIndexlist = styled.div`
width: 200px;
float: left;
border-right: 1px solid gray;
`;

export const MainPage = styled.div`
margin: 0px auto auto 200px;
padding: 30px 0 0 30px;
`;

export const Mainpageoption = styled.div`
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

export const Maintop = styled.div`
//flex-grow: 1;
min-height: 80px;
border-bottom: 1px solid gray;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 50px 0 30px;
`

//////////////////////////////////////login//////////////////////////////////////
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

export const LoginInput = styled.input`
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

export const LoginBotton = styled.div`
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

//////////////////////////////////////Page//////////////////////////////////////
export const PageWrapper = styled.div`
position: relative;
width: 100%;
flex-grow: 1;
margin: 0 auto;
display: flex;
`;

export const PageIndexlist = styled.div`
width: 200px;
height: 100%;
float: left;
`;

export const PagePage = styled.div`
padding: 30px 0 0 30px;
border-left: 1px solid gray;
flex-grow: 1;
`;

export const Pagepageoption = styled.div`
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
&.projectname {
  display: flex;
  align-items: center;
  background: #97CBFF;
  cursor: default;
  text-align: center;
  font-size: 20px;
}
`
//////////////////////////////////////component//////////////////////////////////////
export const ComponentWapper = styled.div`
height: 100%;
width: auto;
`;

export const Componenttitle = styled.div`
width: 300px;
font-size: 20px;
&.componentindex {
  margin: 20px 0 0 30px;
}
`;

export const ComponentoptionWapper = styled.div`
margin: 20px 0 0 25px;
display: flex;
align-items: center;
&.contentwarpper {
  justify-content: start;
  margin: 0;
}
&.content {
  flex-direction: column;
}
&.flow {
  align-items: flex-start;
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
&.blank {
  background: white;
}
&.bottom {
  margin-bottom: 28px;
  cursor: pointer;
}
&.remove {
  background: rgb(204, 0, 0, 0.65);
  cursor: pointer;
}
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
  max-width: 400px;
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
margin-right: 30px;
&.flow {
  width: 200px;
}
&.small {
  width: 70px;
}
`;

export const Componentbutton = styled.div`
text-align: center;
margin: 20px 30px 50px 0;
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
&.addstep {
  margin-left: 780px;
  background: #8CEA00;
}
&.addstepEM {
  margin: 0 0 20px 900px;
  background: #8CEA00;
}
&.addstepDailyrecord {
  margin-left: 605px;
}
`;

export const Componentcheckbox = styled.div`
min-width: 400px;
min-height: auto;
padding: 0 5px;
line-height: 30px;
border-radius: 7px;
font-size: 18px;
border: none;
background: #e0e0e0;
float: left;
`

//////////////////////////////////////others//////////////////////////////////////
export const Sendresult = styled.div`
color: #00DB00;
margin: 30px;
&.fail {
color: red;
}
`;

export const Innerpageoption = styled.div`
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

export const FlowWapper = styled.div`
display: flex;
margin-bottom: 20px;
&.step {
  padding-top: 0px;
  flex-direction: column;
  margin: 0;
}
&.stepoption {
  padding-top: 0px;
}
&.dailyrecord {
  align-items: center;
  margin: 0;
}
`

export const Description = styled.textarea`
width: 590px; 
height: 150px; 
white-space: pre-wrap; 
overflow-wrap: break-word;
padding: 0 5px;
line-height: 30px;
border-radius: 7px;
font-size: 18px;
border: none;
outline: none;
background: #e0e0e0;
resize: none;
font-family: Arial, sans-serif;
&.short {
  width: 570px;
}
`

export const Chartselect = styled.div`
margin-left: 10px;
display: flex;
align-items: center;
`;

export const Option = styled.div`
width: 70px;
`;

export const Bigbutton = styled.div` 
padding: 0 20px;
font-size: 17px;
color: #000079;
float: right;
position: relative;
cursor: pointer;
margin-top: 6px;
margin-left: 10px;
line-height: 38px;
border: 2px solid #777;
background: #d0d0d0;
border-radius: 20px;
`;

export const customStyles = {
  container: (provided) => ({
    ...provided,
    width: '350px',
  })
};

export const PMcustomStyles = {
  container: (provided) => ({
    ...provided,
    width: '200px',
    marginRight: '30px',
  })
};