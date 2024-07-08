import styled from 'styled-components';
import logoPic from '../../statics/asshole.png';

export const HeaderWrapper = styled.div`
position: relative;
height: 56px;
background: #9eedff;
border-bottom: 7px solid #4dbbff;
`;

export const Logo = styled.div`
position: absolute;
top: 0;
left: 0;
display: block;
width: 56px;
height: 56px;
background: url(${logoPic});
background-size: contain;
`;
//////////////////
export const Jumpbottom = styled.div` 
padding: 0 20px;
font-size: 17px;
color: #000079;
float: left;
position: relative;
cursor: pointer;
margin-top: 6px;
margin-left: 10px;
line-height: 38px;
border: 2px solid #777;
background: #d0d0d0;
border-radius: 20px;
`;
////////////////////////
export const Nav = styled.div`
width: 700px;
height: 100%;
margin: 0 auto;
padding-right: 70px;
box-sizing: border-box;
background: #61e2ff;
`;

export const Navitem = styled.div`
line-height: 56px;
padding: 0 15px;
font-size: 17px;
color: #000079;
////////////////////
float: left;
margin-left: 60px;
////////////////////
&.left{
  float: left;
}
&.right{
  float: right;
}
&.active{
  color: #9f35ff;
}
`;

export const SearchWarpper = styled.div`
position: relative;
float: left;
.iconfont{
  position: absolute;
  right: 5px;
  bottom: 4px;
  width: 30px;
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
  &.focused {
    background: #777;
    color: #fff;
  }
}
`;

export const Navsearch = styled.input.attrs({
  placeholder: 'search'
})`
width: 160px;
height: 38px;
margin-top: 9px;
margin-left: 20px;
padding: 0 30px 0 20px;
box-sizing: border-box;
border: none;
outline: none;
border-radius: 19px;
background: #d0d0d0;
font-size: 14px;
&.focused {
  width: 240px;
}
`;

export const Addition = styled.div`
position: absolute;
right: 0;
top: 0;
height: 56px;
`;

export const Searchinfo = styled.div`
position: absolute;
left: 0;
top: 56px;
width: 240px;
padding: 0 20px;
background: #d0d0d0;
box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`;

export const Searchinfotitle = styled.div`
margin-top: 20px;
margin-bottom: 15px;
line-height: 20px;
font-size: 14px;
color: black;
`;

export const Searchinfoswitch = styled.span`
float: right;
font-size: 13px;
cursor: pointer;
`;

export const Searchinfoitem = styled.a`
display: block;
float: left;
line-height: 20px;
padding: 0 5px;
margin-right: 10px;
margin-bottom: 15px;
font-size: 12px;
border: 1px solid #ddd;
color: black;
border-radius: 5px;
background: #bebebe;
`

export const Searchinfolist = styled.div`
overflow: hidden;
margin-top: 10px;
`

export const Button = styled.div`
float: right;
margin-top: 6px;
margin-right: 20px;
padding: 0 20px;
line-height: 38px;
border-radius: 19px;
border: 2px solid #ec6149;
font-size: 17px;
&.color1{
  color: #2894ff;
  background: #f0f0f0;
}
&.color2 {
  color: #0000e3;
  background: #bebebe;
}
`;
