# Exam Call #2 - 25.02.22

The structure of this repository is the following:
  
- `api`: full Open API documentation of the REST APIs, with examples of JSON documents to be used when invoking the operations.
- `json_schemas`: design of the JSON Schemas.
- `components`: Task & User class definitions, as well as db & websockets initialization & wrapper objects to be used throughout the app. 
- `service`: modules that interact with the database and websockets components.
- `controllers`: modules that interact with services and provide a more abstract API. They are assigned to routes in `index.js`.
- `utils`: utility functions - definition of constants & response writers.
- `database`: the database file, extended to support the new features.
- `tests`: Postman Collection used as test suite for developing the features.

This submission is based on the solution of lab # 3. The main changes have taken place in: 
- the openapi specification
- the Task schema in `json_schemas`
- the database tables `assignments` and `tasks`
- the files `service/TaskService.js` & `service/AssignmentService.js` 
- the page size in `utils/constants.js`, for convenience during automated testing

A TDD approach was followed, by modifying the openapi file according to requirements, importing it into Postman, and using it to compose a request collection that could be used as a comprehensive & automated test suite.

## Running the server

- To install dependencies and to launch the server:
  
  `npm start`

- To view the Swagger UI interface:
  
  open http://localhost:3000/docs
  
## Testing on Postman

Two Postman Collections are provided, to be used as automated test suites. 
  
The first one tests the entire flow of a task with 3 assignees and 3 required completers (including users login, task creation, task assignment, users task selection &  completion, and assertions on every intermediate step).

The second one does the same as above, except there are 3 assignees and only 2 required completers.

To run the tests: 
- launch the server with `npm start`
- import the files from the directory `tests` into Postman desktop 
- run the collection from the Postman UI; all tests should execute and pass

## Testing on Swagger UI

JSON Examples corresponding to a task requiring 2 completers have been added to the relevant endpoints to test the new features:

_Added request body examples_
- Login user: `users/authenticator`
- Create new task: `tasks`
- Assign task: `tasks/{taskId}/assignees`
- Select active task: `tasks/{taskId}/completion`

_Added response body examples_
- Complete task: `tasks/{taskId}/completion`
  - error response examples are provided, to handle repeated complete requests by same user or complete requests on already completed activities. 
  - the description was updated to reflect the new logic for task completion.
- Retrieve task: `tasks/{taskId}`
- Retrieve assignees & completers of the collaborative task: `tasks/{taskId}/assignees`


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
- [X] Double check documentation completeness (w. examples)
- [X] Double check everything works on SwaggerUI & Postman (locally & on LabInf VM)
- [X] Finish top level README
