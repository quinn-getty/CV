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
        男 <span style={spanStyle}>|</span> 25岁 <span style={spanStyle}>|</span> 前端开发工程师 <span style={spanStyle}>|</span> 北京 <span style={spanStyle}>|</span> 在职
      </p>
      <div className="flex">
        <span className="mr">手机：<a className="link" href="tel:15504473441">15504473441</a><span style={spanStyle}>|</span></span>
        <span className="mr">微信：<a className="link wechat-copy"  href='weixin://15504473441'>15504473441</a><span style={spanStyle}>|</span></span>
        <span className="mr">邮箱：<a className="link" href="quinn.getty@qq.com@qq.com?subject=TestObject">quinn.getty@qq.com</a></span>
      </div>
    </section>
  </>
}
export default Base