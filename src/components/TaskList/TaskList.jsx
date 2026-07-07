import "./TaskList.css";

function TaskList() {

    return (

        <div className="task-card">

            <h2>Today's Tasks</h2>

            <ul>

                <li>☑ Build Dashboard</li>

                <li>☐ Finish Cascades</li>

                <li>☐ Devil Bomb Animation</li>

                <li>☐ RTP Testing</li>

                <li>☐ Polish UI</li>

            </ul>

        </div>

    );

}

export default TaskList;