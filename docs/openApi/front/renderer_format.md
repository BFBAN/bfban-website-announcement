---
title: 渲染器
parent: front
---

## 渲染器格式

在BFBAN评论和举报提交的内容，都在渲染器工作范围，它将过滤危险标签以及转换工作，渲染器包含2部分，前端和后端都会验证它们。

- 提交的文本内容应该遵循HTML结构
- 渲染器是以html基础开发，混合其他语法实现，详细查阅[渲染器本体](https://github.com/BFBAN/bfban-website/blob/master/front/src/components/Html.vue)，[后端过滤](https://github.com/BFBAN/bfban-website/blob/master/backend/lib/user.js)

### 支持HTML标签

| 标签                                                                  | 描述   | 支持属性                                                                                           |
|---------------------------------------------------------------------|------|------------------------------------------------------------------------------------------------|
| ol, ul, li                                                          | 列表   |                                                                                                |
| div, pre, p, span, b, br, hr, strong, code, h1, h2, h3, q, em, u, i | 通用标签 |                                                                                                |
| ~~video~~                                                           | 视频   | autoplay, controls, crossorigin, loop, muted, playsinline, poster, preload, src, height, width |
| img                                                                 | 图    | "src"，"alt"，"title"                                                                            |
| a                                                                   | 链接   | "href"，"title"，"target"                                                                        |

> 大部分都不支持标签内`class`、`style`等这里属性，在提交时应剔除

#### 示例

##### ✅ 正确

```html
<p><b>标题</b>:</p>
<p>文本</p>
<p><br/></p>
<p><img src="http://x.x.com"/></p>
<p>---</p>
<p>结尾</p>
```

##### ❌ 不建议

以下样式并非不能，而是不建议，对于大量文本数据仍然可以这样处理

```html
标题\n
文本\n
\n
<img src="http://x.x.com"/>\n
---\n
结尾
```

```html
<p>
    标题\n
    文本\n
    \n
    <img src="http://x.x.com"/>\n
    ---
    结尾
</p>
```

##### ❌ 错误样本

未遵循HTML标准

```html
<p>
<p>文本</p>
<p>文本<p>文本</p></p>
</p>
<img src="http://x.x.com"></img>
```

----

### 表情

表情有`[]`组成，完整的表情符合是这样:

```html
<span>[emoji|grinning]</span>

<!-- or -->

[emoji|grinning]
```

emoji表示分类，grinning则是表情id

### 自定义表情

```html
[custom-network|{url}]
<!-- OR -->
[custom-network-https|{url}]
[custom-network-http|{url}]
```

----

### 分割线

从第三个`-`就识别为分割线，无论后面多少个`-`都一样, 分割线会被视为一整块，---后面任何东西都被分隔符覆盖

* ```<p>---</p>```
* ```---```

#### 示例

##### ✅ 正确

```html
<p>---</p>
---
```

##### ❌ 不建议

```html
文本\n
---\n
文本\n
```

----

### 缩语

它是渲染器下一种混合标记命令，为了渲染额外组件而开发

| 命令              | 描述                                 | 输入类型    | 例子                    |
|-----------------|------------------------------------|---------|-----------------------|
| `{icon:*}`      | 图标                                 | string  | `{icon:md-egg}`       |
| `{player:*}`    | 玩家卡片                               | string  | `{player:1057559341}` |
| `{user:*}`      | 站内用户                               | string  | `{user:544}`          |
| `{floor:*}`     | 楼层                                 | string  | `{floor:78068}`       |
| `{privilege:*}` | 身份，此命令较为敏感，不要尝试使用这类标记放置在id后误导用户    | array[] | `{privilege:dev,bot}` |
| `{router:*}`    | 链接，此命令较为敏感, 此地址只能导向站内，站外应该使用a标签来代替 | string  | `{router:/}`          |

> 注意它们需要被p包裹使用，如: ```<span>{user:1}</span>```

#### 示例

##### ✅ 正确

```html
<span>{user:1}</span>
<p><span>{user:1}</span>,<span>{user:2}</span></p>
{user:1}
```

##### ❌ 错误样本

```html
{{user:1}}\n
{user}
user:1
```

## 自动识别

渲染器提供链接和邮箱地址的识别转换，需要遵循几个标准:

* 链接
    * https协议开通
    * 建议链接前后空格，如: 文本 https:*.x.com 地址
* 邮箱
    * 遵循标准邮箱地址格式，如: *@x.com
* 时间
    * 识别2999-01-01 00:08:01格式时间
