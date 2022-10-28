import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EditTodo from './EditTodo';

const Todos = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <div>
            <li key={todo.id}>
              <h2>
                <Link to={`/todos/${todo.id}`}>Task: {todo.taskName}</Link>
              </h2>
              <p>assigned by {todo.assignee}</p>
            </li>
          </div>
        );
      })}
    </ul>
  );
};

const mapStateToProps = ({ todos }) => ({
  todos
});

export default connect(mapStateToProps)(Todos);
