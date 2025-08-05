import React from 'react';

export default function FailedTask() {
  return (
    <div className="task-box">
      <h2>Failed Tasks</h2>
      <ul>
        <li>Task: Finalize backend API – Reason: Deadline missed</li>
        <li>Task: Create analytics dashboard – Reason: Design issues</li>
      </ul>
    </div>
  );
}
