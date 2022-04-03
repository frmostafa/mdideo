import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class SearchAutoComplete extends React.Component {
    static propTypes = {
        suggestions: PropTypes.instanceOf(Array)
      };
    
      static defaultProps = {
        suggestions: []
      };
    
      constructor(props) {
        super(props);
    
        this.state = {
          // The active selection's index
          activeSuggestion: 0,
          // The suggestions that match the user's input
          filteredSuggestions: [],
          // Whether or not the suggestion list is shown
          showSuggestions: false,
          // What the user has entered
          userInput: ""
        };
      }
      
      searchInputClass = () =>{
          const {placement} = this.props;
          if(placement === "searchbar")return ("searchinput")
          if(placement === "navbar")return ("searchinputnav")
          
          return "searchinputnav"
      }    
      suggestionClass = () =>{
          const {placement} = this.props;
          if(placement === "searchbar")return ("suggestions")
          if(placement === "navbar")return ("suggestionsnav")
          
          return "suggestionsnav"
      }    
      activeSuggestClass = () =>{
          const {placement} = this.props;
          if(placement === "searchbar")return ("suggestion-active")
          if(placement === "navbar")return ("suggestionnav-active")
          
          return "suggestionnav-active"
      }
      noSuggestionClass = () =>{
          const {placement} = this.props;
          if(placement === "searchbar")return ("no-suggestions")
          if(placement === "navbar")return ("no-suggestionsnav")
          
          return "no-suggestionsnav"
      }
      
      onChange = e => {
        const { suggestions } = this.props;
        const userInput = e.currentTarget.value;
    
        // Filter our suggestions that don't contain the user's input
        const filteredSuggestions = suggestions.filter(
          suggestion =>
            suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
    
        this.setState({
          activeSuggestion: 0,
          filteredSuggestions,
          showSuggestions: true,
          userInput: e.currentTarget.value
        });
      };
     
      onClick = e => {
        this.setState({
          activeSuggestion: 0,
          filteredSuggestions: [],
          showSuggestions: false,
          userInput: e.currentTarget.innerText
        });
      };
    
      onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = this.state;
    
        // User pressed the enter key
        if (e.keyCode === 13) {
          this.setState({
            activeSuggestion: 0,
            showSuggestions: false,
            userInput: filteredSuggestions[activeSuggestion]
          });
        }
        // User pressed the up arrow
        else if (e.keyCode === 38) {
          if (activeSuggestion === 0) {
            return;
          }
    
          this.setState({ activeSuggestion: activeSuggestion - 1 });
        }
        // User pressed the down arrow
        else if (e.keyCode === 40) {
          if (activeSuggestion - 1 === filteredSuggestions.length) {
            return;
          }
    
          this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
      };
    
      CancelSearch = () => {
          console.log("chiishoood")
        this.setState({userInput : ""})
    }
      render() {
        const {
          onChange,
          onClick,
          onKeyDown,
          state: {
            activeSuggestion,
            filteredSuggestions,
            showSuggestions,
            userInput
          }
        } = this;
    
        let suggestionsListComponent;
    
        if (showSuggestions && userInput) {
          if (filteredSuggestions.length) {
            suggestionsListComponent = (
              <ul className={this.suggestionClass()}>
                {filteredSuggestions.map((suggestion, index) => {
                  let className;
    
                  // Flag the active suggestion with a class
                  if (index === activeSuggestion) {
                    className = this.activeSuggestClass();
                  }
    
                  return (
                    <li className={className} key={suggestion} onClick={onClick}>
                      {suggestion}
                    </li>
                  );
                })}
              </ul>
            );
          } else {
            suggestionsListComponent = (
              <div className={this.noSuggestionClass()}>
                <em>مورد مشابهی یافت نشد!!!</em>
              </div>
            );
          }
        }
    
        return (
          <Fragment>
              <div className="MainSearchBoxRow">
            {showSuggestions && userInput && <i onClick={this.CancelSearch}  className="fa fa-times crossIconInSearch pointer" aria-hidden="true"></i>}
              <input 
               type="text"
               className={this.searchInputClass()}
               onChange={onChange}
               onKeyDown={onKeyDown}
               value={userInput}
               />
              <i className="fa fa-search searchIcon pointer" aria-hidden="true"></i>  
            </div>
         
            {suggestionsListComponent}
          </Fragment>
        );
      }
}
 
export default SearchAutoComplete;