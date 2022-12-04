import React from 'react';
import styles from './experienceLine.module.css';

export const ExperienceLine = (props) => {
  const { from, to, job, title, place, tasks } = props;
  return (
    <div className={`col-lg-6 col-12 ${ styles.experienceLine }`}>
      <span className={ styles.date }>{ from } - { to }</span>
      <h4>{ job }</h4>
      <h5><span className={ styles.society }>{ title }</span>, { place }</h5>
      <ul>
        { tasks.length > 0 && tasks.map((task, key) => 
          <li key={key}>
            { task.name } 
            { task.subTasks.length > 0 
                && <ol>{task.subTasks.map((subTask, key) => <li key={key}>{subTask.title}</li>)}</ol>}
          </li>
        )}
      </ul>
    </div>
  )
}
