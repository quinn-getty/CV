import React from 'react'
import './index.scss'

const Project = () => {
  return     <section class="openSource">
  <h2>开源项目</h2>
  <ul>
     <li >
      <header class="title">
        <h3>WeUI组件</h3>
      </header>
      <section class="introduce">
        <p>
          该项目是参照 <strong>Ant Design</strong>、<strong>Element UI</strong>、<strong>iView</strong> 等 UI 库思路，做的一个基于 <strong>Vue</strong> 的简易 UI 组件库，目前已支持按钮、输入框、网格、布局、Toast、Tabs、Popover、手风琴等组件。每个组件均经历从需求分析到 <strong>Mocha</strong>  单元测试，并用 <strong>TravisCI</strong> 实现持续集成，最终以 <strong>VuePress</strong> 为基础制作官方文档，发布于 npmjs.org。</p>
        <p>完成该项目使我对 Vue 组件化等常用特征更加熟悉，同时提升了自己对前端工程化流程以及单元测试重要性的深刻理解，近一步开源文化。</p>
      </section>
      <div class="preview">
        <img class="QRcode" src="./src/images/WEUI.png" alt=""/>
        <div class="showPc" >
          <a target="_blank" href="https://github.com/GqiangQ/weui">源码链接</a>
          <a target="_blank" href="https://gqiangq.github.io/weui/">项目预览</a>
        </div>
      </div>
    </li>
    <li>
      <header>
        <h3>GUI（weui组件的升级）</h3>
      </header>
      <section class="introduce">
        <p>
          该项目是对weui项目的重构。对技术架构的升级，使用Vite构建项目，用到<strong>Vue3</strong>、<strong>VueRouter4</strong>、<strong>VueX</strong>等新特性。目前重构的组件有Button 、Alert Switch、Dialog、Tabs等。
        </p>
        <p>
          对这个项目的重构是为了学习<strong>vue3</strong>的<strong>新特性</strong>，并且对<strong>Vite</strong>脚手架有了新的认识。对这些学习到的新技术做了相关的总结发布在自己的博客中。
        </p>
      </section>
      <div class="preview">
        <img class="QRcode" src="./src/images/GUI.png" alt=""/>
        <div class="showPc">
          <a target="_blank" href="https://gitee.com/qqiangg/Vue3-gui">源码地址</a>
          <a target="_blank" href="https://gqiangq.gitee.io/vue3-gui/#/">项目预览</a>
        </div>
      </div>
    </li>
    <li>
      <header>
        <h3>极速博客</h3>
      </header>
      <section class="introduce">
        <p>
          一个基于 <strong>React</strong> / <strong>TypeScript</strong>/ <strong>Nextjs</strong> 的移动端单页面应用。
        </p>
        <p>
          这是我从自己的需求出发同时为了学习和研究Nextjs，设计出的极简博客应用，特点是适配移动和pc端随时快速的记录笔记。
          也是为学习基于生产环境的 React 框架 React。数据库使用了<strong>Postgresql</strong>，借助<strong>TypeORM</strong>对其关系对象模型化。
        </p>
        <p>
          该项目我对 <strong>React Hooks</strong>，静态及服务器端融合渲染<strong>SSR</strong>有了深刻的理解和应用。
        </p>
        <p class="tops">本项目发布在一核1M带宽的服务器中，加载缓慢请见谅！</p>
      </section>
      <div class="preview">
        <img class="QRcode" src="./src/images/blog.png" alt=""/>
        <div class="showPc">
          <a target="_blank" href="https://github.com/GqiangQ/blog">源码地址</a>
          <a target="_blank" href="http://www.qqiangg.cn:3000">项目预览</a>
        </div>
      </div>
    </li>
    <li>
      <header>
        <h3>随手画板</h3>
      </header>
      <section class="introduce">
        <p>
          一款使用<strong>纯原生 JS</strong> ，以及 <strong>HTML 5</strong> 的 <strong>Canvas</strong> 元素等开发的画图工具。 支持在 PC 端及移动端在线作画，提供了画笔粗细、颜色调整，撤退、前进，画作删除等功能，并支持画作下载。与此同时，使用 electron 生成了客户端版本，便于桌面随时使用。
        </p>
        <p class="tops">请在pc端预览！</p>
      </section>
      <div class="preview">
        <img class="QRcode" src="./src/images/Canvas.png" alt=""/>
        <div class="showPc">
          <a target="_blank" href="https://gitee.com/qqiangg/Canvas">源码地址</a>
          <a target="_blank" href="https://qqiangg.gitee.io/canvas/">项目预览</a>
        </div>
      </div>
    </li>
    <li>
      <header>
        <h3>可视化大屏</h3>
      </header>
      <section class="introduce">
        <p>
          一款使用<strong> React </strong> ，以及 <strong>HTML 5</strong> 的 <strong>大屏可视化</strong> 项目。 使用图表工具EChart库实现的一个mock疫情大屏的项目，并且自己的开发应用到的工作中。
        </p>
        <p class="tops">请在pc端预览！</p>
      </section>
      <div class="preview">
        {/* <img class="QRcode" src="./src/images/Canvas.png" alt=""/> */}
        <div class="showPc">
          <a target="_blank" href="https://github.com/qqiang-g/large-screen-visualization">源码地址</a>
          <a target="_blank" href="https://qqiang-g.github.io/large-screen-visualization/#/">项目预览</a>
        </div>
      </div>
      {/* <div >
        <a href="https://github.com/qqiang-g/large-screen-visualization">源码地址：https://github.com/qqiang-g/large-screen-visualization</a>
        </div>
        <div >
        <a href="https://qqiang-g.github.io/large-screen-visualization/#/">预览地址：https://qqiang-g.github.io/large-screen-visualization</a>
      </div> */}
    </li>
  </ul>
</section>
}

export default Project;