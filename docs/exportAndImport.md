---
title: 导出和导入
nav_order: 4
sidebar_position: 4
---

## 介绍

此功能是为了迁移本地使用数据迁移设计

- **谨慎操作，覆盖无法还原**
- 本地持久数据不会同步云端，需要你手动导出并在新平台导入这些数据，当然这些数据泄露不会影响您的账户安全，但包含一些记录
- 不要将数据导入到陌生环境下，导出的内容包含你一些本地隐私信息

### 数据包格式

通常数据下包含若干键值，它们如下:

| 名称                     | 是否敏感 | 描述                | 版本 |
|------------------------|------|-------------------|----|
| viewed                 | [x]  | 游览记录              | 2  |
| customReply            | [x]  | 自定义回复模板           | 2  |
| captcha                |      | 验证器相关记录           | 2  |
| language               |      | 语言                | 2  |
| search.history         | [x]  | 搜索历史              | 2  |
| workflow.data          | [x]  | 工作流数据             | 2  |
| workflow.data.meta     |      | 工作流元数据            | 2  |
| workflow.data.archived | [x]  | 工作流归档数据           | 2  |
| workflow.setting       |      | 工作流设置             | 2  |
| theme                  |      | 主题                | 2  |
| user.subscribes        | [x]  | 用户追踪数据            | 2  |
| user.configuration     |      | 用户网站配置            | 2  |
| user.player            | [x]  | 玩家数据，并非用户数据，它作用缓存 | 2  |
| business               | [x]  | 站内用户信息数据          | 2  |
|                        |      |                   | 2  |

**注意**： 上方名称并非全名，它包含前置名称，如: 'bfban.production:',也可能是'bfban.development:'，由环境和配置来决定组成完整的key名称

数据表包会产生一个字典json和data文件夹，字典json记录data下key和基本信息

|            | 格式   | 描述   |
|------------|------|------|
| /data/     | dir  | 文件夹  |
| dictionary | json | 字典列表 |



### 导出

前往`/profile/exportAndImport`下，选择需要导出的key，再点击导出按钮

### 导入

> 只要依照导入规则，第三方也可以对用户数据导入到对应客户端下

前往`/profile/exportAndImport`下点击导入按钮

