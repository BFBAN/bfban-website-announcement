---
title: 机器人申请
nav_order: 2
sidebar_position: 2
---

## 申请

### 准备材料

> 为网站申请机器人分组,机器人身份账户允许定义登录凭证期限,token字段请不要暴露网络环境中,申请前你需要提前准备以下:

- 网站账户名称、id
- 描述机器人名称、机器人作用，使用渠道
- 可选，机器人网站、联系方式、作者名称
  (注: 请不要恶意使用机器人身份，管理组、开发组有权回收身份)

**例子**:

- Admin(id:1)
- 机器人名称: 可可
- 机器人作用: 腾讯QQ渠道举报用户
- 联系方式: [QQ] 或 [邮箱]

### 申请渠道

开发者向以下任意渠道投递:

| 方式    | 地址                 | 描述   |
|-------|--------------------|------|
| Email | services@bfban.com | 事务邮箱 |
| Kook  | bfban dev kook     | N/A  |

### 相关

- 《[用户守则](/precepts/tags/user-policy)》，机器人也会被用户守则约束

----

## 使用

### 登陆

首先调用/api/user/signin[POST] (可访问此处文档来查看接口)接口获得token，储存起来在后续接口提供token身份验证

```json /api/user/signin[POST]
{
  "data": {
    "username": "string",
    "password": "string",
    "visitType": "bot",
    "EXPIRES_IN": "number(ms) 机器人身份账户期限， 这里是时间"
  }
}
```

|                 | 类型     |      | 描述                                                                                         | 版本 |
|-----------------|--------|------|--------------------------------------------------------------------------------------------|----|
| data.username   | string | body | 用户名                                                                                        | 2  |
| data.password   | string | body | 账户密码                                                                                       | 2  |
| data.visitType  | string | body | 访问类型，机器人应填写bot                                                                             | 2  |
| data.EXPIRES_IN | number | body | EXPIRES_IN字段为时间，如果期待永久，可以将值设置为极限；登录成功后取得X-Access-Token，此时X-Access-Token过期时间是由EXPIRES_IN来决定 | 2  |

### 接口

- player/judgement 判决
    - 允许投票: 石锤/一票石锤
- ~~admin/commentAppeal~~(弃用)
- ...

#### 例子

判决接口[post]player/judgement

```json player/judgement
{
  "data": {
    "toPlayerId": "",
    "cheatMethods": [],
    "action": [],
    "content": ""
  }
}
```

|                | 类型     |        | 描述                                                |
|----------------|--------|--------|---------------------------------------------------|
| data.*         |        | body   |                                                   |
| X-Access-Token | string | header | 在请求协议头header中添加此`"x-access-token":"token access"` |

## 机器人身份和其他用户区别

- 跳过验证
- 凭证自定义
- 机器人标识

## 相关内容

- [验证器](../openApi/backend/cathcap) 身份验证
- [授权](../openApi/backend/auth) 第三方授权
- [文本格式](../openApi/front/renderer_format) 举报、回复使用的格式
