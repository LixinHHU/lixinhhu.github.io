# 李鑫的个人学术主页（可编辑 Jekyll 源码）

以原 AcadHomepage 模板为基础，保留顶部导航、左侧个人信息和右侧论文图文列表。英文首页位于 `/`，中文首页位于 `/zh/`；右下方 WeChat 按钮点击后显示本人提供的微信二维码。

## 平时如何编辑

| 想修改的内容 | 编辑文件 |
| --- | --- |
| 姓名、单位、邮箱、头像、Scholar、微信二维码路径 | `_config.yml` |
| 英文介绍、教育经历、荣誉、招生信息 | `_pages/about.md` |
| 中文介绍、教育经历、荣誉、招生信息 | `_pages/about-zh.md` |
| 五篇代表论文、作者、链接及排序 | `_data/publications.yml` |
| News 录用消息及排序 | `_data/news.yml` |
| 导航栏目 | `_data/navigation.yml` |
| 页面样式 | `assets/css/main.scss` |
| 微信弹窗文字及按钮 | `_includes/wechat-modal.html` |

GitHub 上打开相应文件，点铅笔按钮修改并保存提交，GitHub Pages 会重新生成网页。不要在 `_site` 中编辑，那是构建产物。News 按本人要求不显示录用月份。

## 上传到 GitHub Pages

1. 登录实际要使用的 GitHub 账号，新建公开仓库。若要使用 `https://用户名.github.io/`，仓库名必须是 `用户名.github.io`。这里的用户名是 GitHub 的用户名，并非邮箱。
2. 将这个源码目录的**内容**上传到仓库根目录，包括 `_config.yml`、`_pages`、`_includes`、`_sass`、`assets`、`images`、`files` 等。不要仅上传 ZIP，也不要多套一层文件夹。建议用 GitHub Desktop 上传整个文件夹，这样包含 `.github` 在内的文件都能保留。
3. 修改 `_config.yml` 中 `repository` 为 `用户名/仓库名`，`url` 为 `https://用户名.github.io`。个人主页仓库 `baseurl` 保持空字符串；普通项目仓库则填 `/仓库名`。
4. 仓库 Settings → Pages → Build and deployment：选择 **Deploy from a branch**，分支 **main**，目录 **/(root)**，保存。此源码使用 GitHub Pages 自带的 Jekyll 构建。
5. 等构建完成，在 Pages 页面打开显示的网址。检查首页、中文页、PDF 与微信按钮。

本包是源码，**不要添加 `.nojekyll`**。模板会从 `_pages/about.md` 生成首页，因此源码根目录不需要另放 `index.html`。

## 论文与引用

代表论文固定为用户指定的五篇。前三篇配有从本人提供 PDF 提取的架构图、论文 PDF、DOI 和 BibTeX；后两篇仅使用用户提供的标题和作者角色，图片留空。所有论文均提供按标题查询 Google Scholar 的链接。第三篇 PDF 的网页副本已进行无损压缩，页面、文字及图像像素保持一致，便于 GitHub 上传；用户原文件未修改。

引用数字默认不显示，避免将尚未获取的数据误写为 0。要启用真实引用统计，先填写 `repository`，在 Actions 中**手动**运行 `Get Citation Data`。成功产生 `google-scholar-stats` 分支数据后，将 `_config.yml` 的 `google_scholar_stats_enabled` 改为 `true`。页面会校验 Scholar ID，只显示匹配本人的数据；Google Scholar 访问失败时保留查询链接。没有设置自动定时抓取。

## 本地预览

安装 Ruby 与 Bundler 后，在本目录运行：

```sh
bundle install
bundle exec jekyll serve
```

打开终端提示的本地地址。`Gemfile.lock` 保留原模板依赖版本；它使用 Jekyll 3.9.0 / github-pages 215。

## 来源及许可

个人介绍来自河海大学学院公开资料，Scholar、头像和微信二维码由用户指定；录用消息及后两篇的作者角色由用户提供。论文图与 PDF 的版权归原作者及出版方所有。

页面基于用户提供的 AcadHomepage 模板修改，保留原 MIT `LICENSE`；上游说明见 `docs/TEMPLATE-README.md`。本目录为独立副本，未修改用户原始主页目录。
