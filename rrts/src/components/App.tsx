import React, {Component} from "react";
import { connect } from "react-redux";
import { Todo } from "../redux/actions";
import { StoreState } from "../redux/reducers";
import { fetchTodos, removeTodos, removeTodo } from "../redux/actions";

interface AppProps {
  todos: Todo[],
  fetchTodos: Function;
  removeTodos: typeof removeTodos;
  removeTodo: typeof removeTodo;
}

interface AppState {
  fetching: boolean;
}

class _App extends Component <AppProps, AppState> {

  constructor(props: AppProps){
    super(props)
    this.state = {fetching: false}
  }

  componentDidUpdate(prevProps: AppProps): void {
    if(!prevProps.todos.length && this.props.todos.length){
      this.setState({fetching: false});
    }
  }

  onClickButton = (): void => {
    this.props.fetchTodos()
    this.setState({fetching: true})
  }

  onClickRemoveAll = (): void => {
    this.props.removeTodos()
  }

  onClickRemove = (id: number) => {
    this.props.removeTodo(id)
  }

  renderList(): JSX.Element[]{
    return this.props.todos.map((todo: Todo) => {
      return <div key={todo.id}>
        <div onClick={() => this.onClickRemove(todo.id)}>{todo.title}</div>
      </div>
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickButton}>Fetch</button>
        <button onClick={this.onClickRemoveAll}>Remove All</button>
        {this.state.fetching ? <div>LOADING</div> : null}
        {this.renderList()}
      </div>
    )
  }
}


const mapStateToProps = ({todos}: StoreState): {todos: Todo[]} => {
  return {todos};
}

export const App = connect(
  mapStateToProps,
  {fetchTodos, removeTodos, removeTodo}
)(_App)