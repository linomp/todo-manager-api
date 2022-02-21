# Exam Call #2 - 25.02.22

The structure of this repository is the following:
  
- `api`: full Open API documentation of the REST APIs, including examples of JSON documents to be used when invoking the operations.
- `components`: ...
- `controllers`: ...
- `database`: ...
- `json_schemas`: design of the JSON Schemas.
- `service`: ...
- `tests`: Postman Collection used as test suite for developing the features.
- `utils`: ...

## Running the server

- To install dependencies and to launch the server:
  
  `npm start`

- To view the Swagger UI interface:
  
  open http://localhost:3000/docs

- A Postman Collection is provided, to be used as automated test suite. 
  
  It tests the entire flow of a task with 3 "completers" (users login, task creation, task assignment, multi-user completion, and assertions of the results).
  
  To run it, import the file `tests/todo-manager-tests-3-completers.postman_collection.json` into Postman desktop, run the server and then run the collection from the Postman UI.

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