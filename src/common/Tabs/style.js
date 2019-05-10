import Style from 'styled-components'

export const TabUL = Style.ul`
  height:48px;
  position: fixed;
  bottom: 0;
  width: 100%;
  align-items: center;
  background: #eee;
  border-top: .5px solid #d8d8d8;
  display: flex;
  justify-content: space-around;
  padding-bottom: env(safe-area-inset-bottom);
`
export  const TabLi = Style.li`
  display: flex;
  a{
    color:#000;
    text-decoration: none;
    text-align:center;
    &.active{
      color:#f03d37;
    }
  }
`
