import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from '../../actions/todos';
import { MdDone, MdClear } from 'react-icons/md';
import { IoIosAdd } from 'react-icons/io';
/**
 * fazer com que o botao dispare o evento
 * fazer a lista escutar
 */

class TodoList extends Component {

    state = {
        newTodoText: "",
    };

    handleChange = (e) => this.setState({ newTodoText: e.target.value });

    handleSubmit = (e) => {
        const newTodo = this.state.newTodoText;

        let success = () => {
            this.props.addTodo(newTodo);        // chama a action
            this.setState({ newTodoText: "" }); // zera o state local
        }

        let error = () => alert('Sorry, you cant add an empty todo.')
        
        newTodo !== "" ? success() : error();
    }

    render() {
        document.title = "Todo List"
        const todos = this.props.todos;

        return (
            <div className="container">
                <div className="inside-container">
                    <div className="title"><h2>Todo List</h2></div>

                    {/* list */}
                    <div className="list-container">
                        <ul>
                            { todos.length > 0 ? todos.map(
                                todo => (
                                        <li key={todo.id}>
                                            <h3>{todo.text}</h3>
                                            <div className="buttons">
                                                <button className="btn-complete"><MdDone /></button>
                                                <button className="btn-delete"><MdClear /></button>
                                            </div> 
                                        </li>
                                    )
                                ) 
                                : <li className="empty-list-message"><h3>Empty :(</h3></li>
                            }
                        </ul>
                    </div>
                    {/* ~list */}
                    
                    {/* form */}
                    <div className="form-container">
                        <input 
                            value={this.state.newTodoText} 
                            onChange={this.handleChange} 
                            placeholder="type your todo"
                        />
                        <button type="submit" onClick={this.handleSubmit}><IoIosAdd /></button>
                    </div>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ todos: state.todos, });
const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);