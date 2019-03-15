import React, { Component, Fragment } from "react";

import classes from "./index.module.css";
import { withFirebase } from "../Firebase";
import { AuthUserContext } from "../Session";
import Task from "./Task";
import NewTask from "./NewTask";
import TaskEdit from "./TaskEdit";

class BaseTasks extends Component {
  static userContext = AuthUserContext.Consumer;
  state = {
    tasks: [],
    selected: null
  };

  componentDidMount() {
    this.props.firebase.tasks(this.props.authUser.uid).on("value", snapshot => {
      var data = snapshot.val();
      const tasks = [];
      for (let key in data) {
        tasks.push({
          ...data[key],
          id: key
        });
      }

      this.setState({
        tasks: tasks,
        selected: null
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.tasks(this.props.authUser.uid).off();
  }

  taskSelectionHandler = id => {
    this.setState({ selected: id });
  };

  taskUnselectedHandler = () => {
    this.setState({ selected: null });
  };

  taskSavedHandler = savedTask => {
    this.props.firebase.task(this.props.authUser.uid, savedTask.id).update({
      description: savedTask.description,
      note: savedTask.note
    });
  };

  taskDeletedHandler = id => {
    this.props.firebase.task(this.props.authUser.uid, id).remove();
  };

  taskStateChangedHandler = id => {
    const task = this.state.tasks.find(t => t.id === id);
    this.props.firebase.task(this.props.authUser.uid, id).update({
      completed: !task.completed
    });
  };

  addNewTaskHandler = description => {
    this.props.firebase.tasks(this.props.authUser.uid).push({
      description: description,
      completed: false,
      note: ""
    });
  };

  render() {
    let taskEdit = null;
    let taskEditClasses = [classes.TaskEditContainer];

    if (this.state.selected) {
      const task = this.state.tasks.find(t => t.id === this.state.selected);
      taskEdit = (
        <TaskEdit
          task={task}
          cancelled={this.taskUnselectedHandler}
          saved={this.taskSavedHandler}
          deleted={() => this.taskDeletedHandler(task.id)}
        />
      );

      taskEditClasses.push(classes.Opened);
    }

    return (
      <Fragment>
        <div className={classes.Tasks}>
          {this.state.tasks.map(task => {
            return (
              <Task
                key={task.id}
                description={task.description}
                selected={this.state.selected === task.id}
                completed={task.completed}
                stateChanged={() => this.taskStateChangedHandler(task.id)}
                taskSelected={() => this.taskSelectionHandler(task.id)}
              />
            );
          })}
          <NewTask taskCreated={this.addNewTaskHandler} />
        </div>
        <div className={taskEditClasses.join(" ")}>{taskEdit}</div>
      </Fragment>
    );
  }
}

const Tasks = props => (
  <AuthUserContext.Consumer>
    {authUser => <BaseTasks {...props} authUser={authUser} />}
  </AuthUserContext.Consumer>
);

export default withFirebase(Tasks);
