# N1 Answers: package.json

Name: Raven Kristian Abarintos  
Section: IV-BSIT C

1. **name** identifies the project. It should be a suitable package name.
2. **version** shows the current project version. It commonly follows semantic versioning.
3. **description** gives a short explanation of what the project does.
4. **main** identifies the main entry file when another program imports the package.
5. **scripts** stores command shortcuts. In this activity, `npm start` runs `node index.js`.
6. **dependencies** lists packages needed by the application while it runs. Axios is included as a regular dependency.
7. **devDependencies** lists packages used during development. Nodemon is included here to restart the app during development.

The **node_modules** folder contains the installed package files and their dependencies. It is usually not included in a submission because it can be recreated from package.json and package-lock.json by running `npm install`. Excluding it keeps the repository smaller and avoids uploading many generated files.
