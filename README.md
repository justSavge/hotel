记录：使用 react-router 的 useSearchParams 对 url 修改达到传递信息的目的，以此修改排序，过滤等操作

项目：大旅馆后台<br/>
为旅馆提供了后台，便于管理用户，房屋，提供了主要信息显示，预定房间，房间管理，用户管理，设置，以及设置登录页面。
技术栈:react + react-query + react-router + styled-components

Hotel
· 开发思路：为酒店提供后台管理系统，提供登录，管理房间（完成），订单，统计，设置（完成），用户功能。
· 技术栈：react + react-query + react-router + Styled component + HOP
· 使用技术：
o 使用了 React 搭建，主要使用了高阶复合组件优化了代码结构，提高了可重用性，如对 Modal 的 Modal.open,modal.window，可以为客房添加与客房菜单提供点击加入窗口的作用。
o 使用自定义 Hook 解决了大量问题，如：useOutsideClick,使用 useRef,useEffect 为绑定元素外提供点击功能，解决了点击外界元素关闭小窗口的功能。
o 使用 React-router 的 BrowserRouter,routes 等实现路由,实现单页式应用，使用 Router-query 对远程 state 管理，过期更新，发送不同请求等。
o 使用 Styled Component 实现 css in js。
o 优秀的代码使用规范与文件结构，使用了 page,features,hooks,servers 等文件夹提供不同功能，并且全部代码书写均在 eslint ，eslint-plugin-react，vite-plugin-eslint 等诸多规范下书写。
o 使用 supabase 快速搭建后端，netlify 托管网站。

一个酷炫的酒店后台系统网页。<br>
还在开发中--https://lijun-hotel.netlify.app/<br>
已完成用房登记(95%)，设置。<br>
使用了 react-query 管理远程 state,context-api（及高阶复合组件）管理 ui state.<br>
后端由 supabase 提供服务。<br>
网页交由 netlify 托管<br>
请移步<a href="https://lijun-hotel.netlify.app/" target="_blank" rel="nofollow">龙门客栈</a>。
为用户提供了主要信息显示，预定房间，房间管理，用户管理，设置，以及设置登录权限，以免任何人都可以进入系统 1.主要信息显示(使用某些出色的第三方 react 库提供图形展示，显示重要数据，如房间订阅数，最受欢迎的房间...) 2.预定房间 3.房间管理 4.用户管理 5.设置 6.以及设置登录权限
