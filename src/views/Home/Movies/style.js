import Styled from 'styled-components'
import search from '@/image/search.png'

export const Topbar = Styled.section`
  border-bottom: 1px solid #e6e6e6;
  height: 44px;
  .topbar-bg {
    display: flex;
    align-items: center;
    height: 44px;
    justify-content: space-between;
    .city-entry {
      padding-left: 15px;
      font-size: 15px;
      color: #666;
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
    }
    .switch-hot {
      display: -webkit-box;
      display: flex;
      height: 44px;
      line-height: 44px;
      position: relative;
      .hot-item {
        font-size: 15px;
        color: #666;
        width: 80px;
        width: 21.33333vw;
        text-align: center;
        margin: 0 12px;
        font-weight: 700;
      }
    }
    .search-icon {
      width: 20px;
      height: 20px;
      background: url(${ search }) 10px no-repeat;
      background-size: 20px;
      padding: 10px 15px 10px 10px;
  }
  }
`
export const MovieList = Styled.ul`
  width:100%;
  .main-block{
    display: flex;
    .avatar {
      width: 64px;
      height: 90px;
      position: relative;
      margin-top: 12px;
      display: flex;
      margin-left: 10px;
      img{
        width:64px;
        height:90
      }
    }
    .content-wrapper {
      flex: 1;
      padding: 12px 14px 12px 0;
      margin-left: 10px;
      height: 90px;
      max-height: 90px;
      position: relative;
      .content {
        padding-right: 5px;
        margin-right: 48px;
        overflow: hidden;
      }
      .button-block {
        font-size: 12px;
        position: absolute;
        right: 14px;
        top: 0;
        bottom: 0;
        height: 27px;
        margin: auto;
      }
    }
  }
`