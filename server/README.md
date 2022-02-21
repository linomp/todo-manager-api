# ToDoManager Service - Instructions

## Running the server

To install dependencies and to launch the server:
./ npm start

To view the Swagger UI interface:
open http://localhost:3000/docs


## Implementation Roadmap
_Repo setup & test suite_
- [x] Analyze exam task & lab 3 solution structure
- [x] Adjustments to `openapi.yaml` (fix layout, add examples) and import in Postman 
- [X] Implement user creation workaround
- [X] Create automated test suite (with Postman test scripts) - TDD approach

_Feature Implementation_
- [X] Extend Task Schema, add `currentCompleters`, `minCompleters`, `selectors`, and `completers` properties (besides completer count, task owner also needs to know selectors' and completers' info). 
  - Keep in mind: _"a completer is a task assignee who has completed that task. A task may have 100 assignees but less completers"_
- [X] Extend Task creation endpoint
- [X] Adjust notion of 'Task completion'; now based on minimum completers vs. current completers.
- [X] Add validation/error: _"a user who has already completed a task cannot complete it again"_.
- [X] Make sure _"only assignee of a task can mark it as completed"_ still holds.
- [X] Document logic extension in task completion endpoint
- [X] Allow owner of task to see: `assignees`, `selectors` & `completers`

_Final Checks_
- [ ] Double check documentation completeness (w. examples)
- [ ] Double check everything works on SwaggerUI & Postman
- [ ] Clean up repo & finish top level README (document changes in Task Service, Assignment Service & db)
- [ ] Clean up Task Service completion code