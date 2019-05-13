import Style from 'styled-components'

export const Head = Style.header`
    height: 50px;
    line-hight:50px;
    display: flex;
    background: #e54847;
    z-index:100;
    &.isfixed{
        position:fixed;
        top:0;
        width:100%;
    }
`
export const Title = Style.h1`
    flex: 1;
    font-size:18px;
    color:#fff;
    align-self: center;
    text-align:center;
`