import React from 'react';
import './scss/app.scss'
import { Header } from './components'
import { Main, Cart } from './pages'
import { Route } from 'react-router-dom';


const App = () => {

  return (
    <div className="wrapper">
     <Header />
    <div className="content">
    <Route exact path='/' component={Main}/>
    <Route path='/cart' component={Cart}/>
    </div>
  </div>
  );
}


export default App;



// class App extends React.Component {

//   componentDidMount(){
//     axios.get('http://localhost:3000/db.json')
//     .then(({data}) => {
//       this.props.setDataGoods(data.pizzas)
//     })
//   }

//   render(){
//     return (
//       <div className="wrapper">
//        <Header />
//       <div className="content">
//       <Route exact path='/' render={() => <Main goods={this.props.items}/>}/>
//       <Route path='/cart' render={() => <Bucket />}/>
//       </div>
//     </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.productCard.items
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setDataGoods: (data) => {
//       dispatch(setDataGoodsAC(data))
//     }
//   }
// }