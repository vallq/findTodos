**Find Todos**

This is a short script (parseScript.js) that parses the directory where the script is executed to search for files that have at least 1 `TODO` keyword present.

The absolute path of the files are logged to the terminal.

**Getting Started**
```
git clone <repository link>
cd findTodos
npm install //installs related dependencies
```

**Running the Script**
```
cd /path/to/desired/directory
node /path/to/parseDirectory.js
```

Expected Output
```
user:~/path/to/findTodos $ cd tests/test1
user:~/path/to/findTodos/tests/test1 $ node ../../parseDirectory.js
findTodos/tests/test1/function1.js
findTodos/tests/test1/subFolder1/Apple.js
```

**Tests**
Regular Testing
```
npm run test
```

Test Coverage
```
npm run test:coverage
```