<h1>Reworked <a href="https://katerinasemenova.ru"> KaterinaSemenova</a> site using Next.JS, new libs, Turbopack</h1>

<hr>
Table of contents:

1. Stack/libruary usage
2. Commit decryption/progress
3. known issues

<hr>
** 1. **<br>
1.1 Next.JS, SASS, TS;<br>
1.2 Choose React-slick to implement slider: it has fade in/out, dots; 
<br>
<br>
<hr>
** 2. **<br>
<b>v: 0.0.1 / d: 29.10.24</b> <br>    
project/repo init, git-flow init, first commit,
<br>
<b>v: 0.0.1 / d: 30.10.24</b> <br>    
The basic structure, layout and styles are copied from the original app, adapted to use Next.JS;
Implement scroll, add new styles: mixins and link underline animation;
Still have issue with SASS -> Migration;
<br>  
<b>v: 0.0.1 / d: 04.11.24<br></b> 
MySQL connecting attempts;    <br>
<b>v: 0.0.1a / d: 12.11.24<br></b> 
While I have some problems with connecting to the DB, I decided to make a static, local resource storage as it was before;
<br>Add react-slick lib to implement carousel;
<br>
<b>v: 0.1.0 a / d: 20.11.24<br></b> 
Setteled on the choice of react-slick lib to implement slider;
Setting styles and small logic touches;
<br><b>v: 0.1.0 a / d: 21.11.24<br></b> 
Start GH Action settings and met some deploy issues with paths;
After about <b>56(!SIC)</b> deploys found out how to set next.conifg+nextjs.yml for deploying static app;
I have working styles and logic, although some features like fonts and library styles don't work as well;
<br><b>v: 0.1.5 a / d: 10.12.24<br></b> 
Add 'scroll to top' button when rich lowest contacts block
<br>
<br>
<hr>
** 3. **<br>
[&nbsp;&nbsp;] font path issue




