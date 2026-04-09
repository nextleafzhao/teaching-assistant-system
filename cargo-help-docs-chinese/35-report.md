# `report` 命令帮助文档

```text
CARGO-REPORT(1)

名称
       cargo-report — 生成并显示各种报告

概要
       cargo report 类型 [选项]

   描述
       显示给定类型的报告 — 目前，仅支持 future-incompat

选项
       --id id
           显示具有指定 Cargo 生成的 id 的报告

       -p spec…, --package spec…
           仅显示指定包的报告

示例
       1. 显示最新的未来不兼容报告：

              cargo report future-incompat

       2. 显示特定包的最新未来不兼容报告：

              cargo report future-incompat --package my-dep:0.0.1

另请参阅
       未来不兼容报告
       <https://doc.rust-lang.org/cargo/reference/future-incompat-report.html>

       cargo(1)
```
