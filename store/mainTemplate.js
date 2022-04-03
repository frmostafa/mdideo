import {createSlice} from "@reduxjs/toolkit";
const initialState = { 
 sideBarItemsTitleClass : "sideBarItemsTitle"
,sidesideBarClass : "sidebar-max" 

,MainContentClass : 'MainVideoContent-min'
,sideBarCollapsed : true 
, describtion : "hahaha" 
}

const slice = createSlice({
    name : "mainTemplate",
    initialState : initialState,
    reducers : {
      toggleSideBarIS:(state , action) => {
        state.sideBarCollapsed = !state.sideBarCollapsed;

        if(!state.sideBarCollapsed){
          state.sidesideBarClass = "sidebar-min";
          state.MainContentClass = "MainVideoContent-max";
          state.sideBarItemsTitleClass = "sideBarItemsTitle-min";
        }
        if(state.sideBarCollapsed){
          state.sidesideBarClass = "sidebar-max";
          state.MainContentClass = "MainVideoContent-min";
          state.sideBarItemsTitleClass = "sideBarItemsTitle";
        }
      }
    }
  })
  export const {sideBarCollapsed , toggleSideBarIS} = slice.actions;
  export default slice.reducer