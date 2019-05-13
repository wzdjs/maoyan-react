import { connect } from 'react-redux'
import UI from './ui'
import createAction from './store/createAction'

const mapStateToProps = (state) => {
  return {
    filmList: state.getIn(['MOVIE','filmList'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    Film: () =>{
      dispatch(createAction.FilmAction)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps )(UI)