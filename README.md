# 在线demo、主要内容、一些亮点
#### [2019.4.28在线demo](https://jsbin.com/gusazek/edit?html,css,output) . 
主要内容  
### 类似微信聊天对话  
+ 亮点  
**1.使用media与vw布局，字体以及图片等能随视口一起缩放。  
2.没有多余类名的镶嵌，便于修改。**  
  
  
#### [2019.4.29在线demo](https://jsbin.com/mavarox/edit?html,css,output)  
主要内容  
### 元素放大缩小选中  
+ 亮点  
**1. 使用radio实现选中状态。** 


#### [2019.4.30在线demo](https://jsbin.com/bufulek/1/edit?html,css,output)  
主要内容  
### 两栏布局  
+ 亮点  
**1. 除了网格布局，使用了绝对定位、flex布局、浮动、以及原生流体特性。  
  2. 对元素没有内容进行处理，代码如下。**    
```
dd:empty::before {
    content: '-';    
    color: #999;
}
```    
  
    
#### [2019.5.1在线demo请把鼠标移到‘删除’](https://jsbin.com/watakew/edit?html,css,output)  
主要内容  
### tips提示  
+ 亮点  
**1. 能键盘访问。  
  2. 下方提示不会遮挡上方文字，体验感强。以下两种方法：**  
```
  1. pointer-events: none;
  2. transition: visibility 0.01s 0.2s;  
``` 
  
  
#### [2019.5.2在线demo](https://jsbin.com/namizim/edit?html,output)  
主要内容  
### 表单登录  
+ 亮点  
**1. 使用form、submit、键盘enter按下时能形成提交。  
  2. 使用fielset.lengend。**
**3. name  
  4. required 验证。**  
**5. autocomplete = 'off'.  
  6. tabindex,autofocus.**  
**7. type = 'text',可以省略.  
  8. 忘记密码，立即注册使用a标签，可以键盘focus.** . 
  
  
  
  mac 代码块右移 shift + table  
  desktop打开搜索框  command + space 
  
  
  



    










## 文本区域

- 防止拖拽文本域
  - resize: none;
