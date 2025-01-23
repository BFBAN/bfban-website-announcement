---
title: 验证器
parent: dev
---

提供二种验证器，分别是`svg`和`turnstile`，`svg`是常规矢量图形，`turnstile`是cloudflare turnstile机器人验证器，第三方应该选择`svg`作为验证手段。

## 验证

### SVG

对于需要验证接口,在body下提供`captcha`字段，它看起来像这样:

```json
{
  "captcha": {
    "captchaType": "svg",
    "encryptCaptcha": "",
    "response": ""
  }
}
```

"encryptCaptcha"字段值，可以通过[get]/api/captcha接口获得，详见[api.bfban.com/docs](https://api.bfban.com/docs)

### Turnstile

> 第三方目前不支持

```json
{
  "captcha": {
    "captchaType": "turnstile",
    "response": ""
  }
}
```

## 跳过验证

拥有机器人身份账户，可以使用`SKIP_CAPTCHA`验证

> 此字段是用于提供机器人绿色通道，对于面向机器人用户应该保留验证动作，防止机器人的用户滥用接口

```json
{
  "SKIP_CAPTCHA": true
}
```
