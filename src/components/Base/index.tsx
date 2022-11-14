import React from 'react'
import './index.scss'

const Base = () => {
  const spanStyle = {
    margin: '0 4px'
  }
  return <>
    <section className="base" >
      <h2>高强强</h2>
      <p>
        男 <span style={spanStyle}>|</span> 25岁 <span style={spanStyle}>|</span> 前端开发工程师 <span style={spanStyle}>|</span> 成都 <span style={spanStyle}>|</span> 求职
      </p>
      <div className="contact">
        <div className='contact_item'>
          手机：<a href="tel:15504473441">15504473441</a>
        </div>
        <div className='contact_item'>
          微信：<a className="wechat-copy"  href='weixin://15504473441'>15504473441</a>
        </div>
        <div className='contact_item'>
          邮箱：<a href="mailto:quinnn.gao@gmail.com?subject=Hi, Quinn">quinnn.gao@gmail.com</a>
        </div>
      </div>
      <div className="link">
        <div className='link_item'>
          <a className='link_name' href='https://github.com/quinn-getty'>GitHub</a>
          <a className='link_url' href='https://github.com/quinn-getty'>: https://github.com/quinn-getty</a>
        </div>
        <div className='link_item'>
          <a className='link_name' href='https://www.cnblogs.com/geter/'>博客园</a>
          <a className='link_url' href='https://www.cnblogs.com/geter/'>: https://www.cnblogs.com/geter/</a> 
        </div>
        <div className='link_item'>
          <a className='link_name' href='https://juejin.cn/user/4494459265892174'>掘金</a>
          <a className='link_url' href="https://juejin.cn/user/4494459265892174">: https://juejin.cn/user/4494459265892174</a>
        </div>
        <div className='link_item'>
          <a className='link_name' href='https://quinn-getty.github.io/CV/'>简历</a>
          <a className='link_url' href="https://quinn-getty.github.io/CV/">: https://quinn-getty.github.io/CV/</a>
        </div>
      </div>
    </section>
  </>
}
export default Base