import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import FilterList from "../components/FilterList.jsx";

import { setFilter, clearFilter } from "../actions";

//Note: The acc parameter in the code below consufed me so I wrote the code at the end and ran
// it in jsfiddle. Then I understood what was going on.
const mapStateToProps = (state, props) => {
  console.log('The state is ',state)
  const categories = state.posts.reduce((acc, post) => {
    //console.log('acc is ',acc);
    if (!acc.includes(post.category)) {
      return [...acc, post.category];
    }
    return acc;
  }, []);

  return { categories };
};

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators({ setFilter, clearFilter }, dispatch);

const ConnectedFilterList = connect(mapStateToProps, mapDispatchToProps)(
  FilterList
);

export default ConnectedFilterList;


// const array1 = ['welcome', 'test', 'unittest','welcome']

// const categories = array1.reduce((acc, post ) => {
// if(!acc.includes(post)){
//    	return [...acc, post]
//     }
//     return acc;
// },[]) 

// console.log(categories);
