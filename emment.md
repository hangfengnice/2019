# Emment （快速生成 Html）

## Child: >

- div>ul>li

```html
<div>
    <ul>
        <li></li>
    </ul>
</div>
```

## Sibling: +

- div+p+bq

```html
<div></div>
<p></p>
<blockquote></blockquote>
```

## Climb_up: ^ (父级)

- div+div>p>span+em

```html
<div></div>
<div>
    <p><span></span><em></em></p>
</div>
```

- div+div>p>span+em^bq

```html
<div></div>
<div>
    <p><span></span><em></em></p>
    <blockquote></blockquote>
</div>
```

- div+div>p>span+em^^^bq

```html
<div></div>
<div>
    <p><span></span><em></em></p>
</div>
<blockquote></blockquote>
```

## Multipliction: *

- ul>li*5

```html
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

## Grouping: ()

- div>(header>ul>li*2>a)+footer>p

```html
<div>
    <header>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </header>
    <footer>
        <p></p>
    </footer>
</div>
```

- (div>dl>(dt+dd)*3)+footer>p (嵌套)
  
```html
<div>
    <dl>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
    </dl>
</div>
<footer>
    <p></p>
</footer>
```

## Attribute operators

### ID and CLASS

- div#header+div.page+div#footer.class1.class2.class3

```html
<div id="header"></div>
<div class="page"></div>
<div id="footer" class="class1 class2 class3"></div>
```

### Custom attributes

- td[title="Hello world!" colspan=3]

```html
<td title="Hello world!" colspan="3"></td>
```

### Item numbering: $

- ul>li.item$*5

```html
<ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
</ul>
```

- ul>li.item$$$*5

```html
<ul>
    <li class="item001"></li>
    <li class="item002"></li>
    <li class="item003"></li>
    <li class="item004"></li>
    <li class="item005"></li>
</ul>
```

- ul>li.item$@-*5

```html
<ul>
    <li class="item5"></li>
    <li class="item4"></li>
    <li class="item3"></li>
    <li class="item2"></li>
    <li class="item1"></li>
</ul>
```

- ul>li.item$@3*5

```html
<ul>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
    <li class="item6"></li>
    <li class="item7"></li>
</ul>
```

- ul>li.item$@-3*5

```html
<ul>
    <li class="item7"></li>
    <li class="item6"></li>
    <li class="item5"></li>
    <li class="item4"></li>
    <li class="item3"></li>
</ul>
```

### Text: {}

- a{Click me}

```html
<a href="">Click me</a>
```