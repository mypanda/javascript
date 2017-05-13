### javascript

javascript 接口[api](https://developer.mozilla.org/zh-CN/docs/Web/API)

javascript [基础](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)

==================================

#### String [mozilla devaloper](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)

* String.prototype.charCodeAt(index) 返回字符串指定位置的Unicode编码

```
var str = 'hello';
str.charCodeAt(0);//104
```

* String.prototype.indexOf(searchValue[,fromIndex]) 字符是否存在字符串内,不存在为-1

```
var str = 'hello';
str.indexOf('h');//0
```

* String.prototype.slice(beginSlice[,endSlice]) 截取字符串

```
var str = 'hello';
str.slice(0,1);//h,从0位置开始截取，到1位置,不包含最后一个
```

* String.prototype.split([separator[,limit]]) 对象被" "空格分割成数组,limit是限制输出几个

```
var str = 'hello';
str.split("");//["h","e","l","l","o"]
```

* String.prototype.substr(start,[,length]) 提取对象上的字符串，负数为从最后面开始,第二个参数是长度

```
var str = 'hello';
str.substr(0,1);//h
str.substr(-1,1);//0
```

* String.prototype.substring(indexStart[,indexEnd]) 提取对象上的字符串，负数默认为0,第二个参数是结束为止

```
var str = 'hello';
str.substring(2,3);//l
str.substring(-5,1);//0
```

* String.prototype.toString(),String.prototype.valueOf() 返回String对象的原始值

```
var x = new String("Hello world");
alert(x.valueOf());//Hello world
```

* String.prototype.toLowerCase(),String.prototype.toUpperCase() 转换大小写

* String.prototype.replace(regexp|substr,newSubStr|function)替换

```
var str = "hello world";
var newStr = str.replace(/world/i,'panda');//hello panda
```

#### Array [mozilla devaloper](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)


#### Node [mozilla devaloper](https://developer.mozilla.org/zh-CN/docs/Web/API/Node)

* 属性
* childNodes
* nodeName
* nodeType
* nodeValue
* parentNode

* 方法
* appendChild
* cloneNode
* insertBefore
* removeChild
* replaceChild

* children