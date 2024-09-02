import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';

createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
`;

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
flex-grow: 1;
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

export const Maintop =styled.div`
//flex-grow: 1;
min-height: 80px;
border-bottom: 1px solid gray;
display: flex;
align-items: center;
justify-content: flex-end;
padding-right: 30px;
`