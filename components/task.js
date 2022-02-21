class Task {
    constructor(id, description, important, privateTask, deadline, project, completed, active, minCompleters = 1, currentCompleters = 0) {
        if (id)
            this.id = id;

        this.description = description;
        this.important = important;
        this.private = privateTask;

        if (deadline)
            this.deadline = deadline;
        if (project)
            this.project = project;

        this.minCompleters = minCompleters;
        this.currentCompleters = currentCompleters;

        this.completed = this.currentCompleters == this.minCompleters;
        //this.completed = completed || false;
        this.active = active;

        var selfLink = "/api/tasks/" + this.id;
        this.self = selfLink;
    }
}

module.exports = Task;


