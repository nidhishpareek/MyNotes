npm install redux react-redux

//*************************************Action Type file actiontype.js********************************
      - to prevent spelling mistake we make them as variables.
export const ADDTODO = "AddTodo";
export const DELETETODO = "DeleteTodo";


//************************************* Action file action.js*************************************

import { ADDTODO, DELETETODO, MODIFYTODO, TOGGLETODO, OPENTODO } from "./actiontype";

export const addTodo = (data) => ({ type: ADDTODO, payload: data });
export const deleteTodo = (data) => ({ type: DELETETODO, payload: data });


//************************************* Reducer file reducer.js *************************************

import { ADDTODO, DELETETODO, MODIFYTODO, OPENTODO, TOGGLETODO } from "./actiontype";

const initial =  {todos:[]};

export const reducer = (state = initial, action) => {
  switch (action.type) {
    case ADDTODO: {
      return {...state ,todos: [...state.todos, action.payload]};
    }
    default: return state;
  }
};



// *************************************store file store.js  *************************************

import { legacy_createStore } from "redux";
import {reducer} from './reducer'
export const store =  legacy_createStore(reducer);


************************************* USE of redux *************************************

import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/action";

  var todos = useSelector((store) => store);
  const dispatch = useDispatch();


  dispatch(addTodo(payload_object));


*************************************Index.js*************************************
import { Provider } from "react-redux";
import { store } from "./redux/store";
<Provider store={store}> app components</Provider>