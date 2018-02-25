# processing-api

Loans processing API for the v8 system

## Development Process

The following outlines each step required to reach the ultimate goal of code reaching the internal systems.

Please follow these guidlines to ensure successful merge requests and code reviews.

There are 3 main areas of concern here:

1. Jira Task Process
2. Branches
3. Development

Please read each of these sections carefully.

### Jira Task Process

#### Assertaining Task Kowledge

Each Jira task represents an associated API, you should be able to use the information in the Jira Task which will collate to a conversion document under /doc/conversion.
In here it will marry up to an API which you can then find more information on the shape, request type etc.

#### Processing in Jira

1. Pick up the task
2. Set the task to "in Progress"
3. Start Tempo by pressing play
4. Branch from the ext-dev branch into a branch called the same as the Jira Task ID (See Branches)
5. Perform the task as required
6. When you feel you have finished the task commit the code
7. Submit a Merge Request (see Branches) 
8. Set the Task to a status of "Code Review"
9. Stop Tempo

### Branches

| **External Default Branch** |
|---|
| ext-dev |

The branches above define the branches below in the directions.
You will replace the wording of [External Default Branch] with the wording above in your git commands and merge requests.

### WARNING

Never ever commit and merge back into the [External Default Branch] this will be done by merge requests and accepted or rejected by internal developers.
It will then be your responsibility to fix the items and resubmit a merge request.

### Steps

| Step No. | Instructions | Notes |
|---|---|---|
| 1 | Create a branch named with your [Jira Task ID] based from [External Default Branch] |  |
| 2 | Complete the task and create unit tests and run code coverage | Ensure development standards are followed.  |
| 3 | Merge in [External Default branch] into your code before commiting to ensure you have the latest in your branch | This is to minimise merge request issues |
| 4 | Ensure your work is ok, re-run tests and code coverage | We are aiming for 100% coverage on your work items |
| 5 | Commit your work into [Jira Task ID] branch | Ensure commit message contains the Jira Task ID |
| 6 | Submit a Merge request as follows **FROM:** _[Jira Task ID] Branch_ **TO:** _[External Default Branch]_ **ASSIGN:** _yourself_      | |
| 7 | Mark Jira Task to "Code Review" and leave assigned to yourself |
| 8 | A developer will now review the merge request and comment, accept or reject. | |
| 9 | If rejected, Task will be assigned back to you with Notes and you are to review the merge request issue list. | Repeat from Step 2 |

### Basic Flow

```
                                       +                                    +-----------------------------+
                                       |                                    |                             |
                                       |                                    |   External Default Branch   |
                                       |                                    |                             |
                                       |                                    +--------------+--------------+
                                       |                                                   |
                                       |                                                   |
                                       |                                    +--------------v--------------+
                                       |                                    |                             |
                                       |                                    |   Create "Jira ID" Branch   |
                                       |                                    |   git branch -b [Jira ID]   |
                                       |                                    |                             |
                                       |                                    +--------------+--------------+
                                       |                                                   |
                                       |                                                   |
+------------------------------+       |                                         +---------v---------+
|                              |       |                                         |                   |
|                              |       |                                         >   Work Complete   |
| Internal Developer Process   |       |                                         |   with tests      |
|                              |       |                                         +---------+---------+
|                              |       |                                                   |
+------------^-----------------+       |                                                   |
             |                         |                                +------------------v--------------------+
             |                         |                                |                                       |
             |                         |                                |   Merge in "External Default Branch"  |
             |                         |                                |   git merge [External Default Branch] |
             |                         |                                |                                       |
             |                         |                                +------------------+--------------------+
             |                         |                                                   |
             |                         |                                                   |
             |                         |                                 +-----------------v------------------+
             |                         |                                 |                                    |
             |                         |                                 |        Retest and ensure work      |
             |                         |                                 |        Run code Coverage           |
             |                         |                                 |                                    |
             |                         |                                 +-----------------+------------------+
             |                         |                                                   |
             |                         |                                                   |
             |                         |                               +-------------------v---------------------+
             |                         |                               |                                         |
             |                         |                               |    Commit changes to "Jira Id" Branch   |
             |                         |                               |    git add -all                         |
             |                         |                               |    git commit -m "Jira ID"              |
             |                         |                               |    git push origin "Jira ID"            |
             |                         |                               |                                         |
             |                         |                               +-------------------+---------------------+
             |         +-------------------------------+                                   |
             |         |        MARCUS - Items         |                                   |
             |         |                               |                +------------------v---------------------+
             |         +-------------------------------+                |                                        |
             |         |                               |                |    Submit Merge Request                |
             |         | Assign:                       <--------+       |    From: "Jira ID" branch              |
             +---------+                               |        |       |    To: External Default branch         |
                       |     - Merge Request to        |        |       |                                        |
                       |       internal dev            |        |       |                                        |
                       |                               |        |       +------------------+---------------------+
                       |                               |        |                          |
                       +-------------------------------+        |                          |
                                                                |       +------------------v----------------------+
                                                                |       |                                         |
                                                                +-------+     Mark Jira Task as Code Review       |
                                                                        |                                         |
                                                                        |                                         |
                                                                        +-----------------------------------------+

```

## Set up

The following is a guide to setting up your environment and getting it up and running. As node is cross platform this is compatable with both windows and linux, although there are some small tweaks to windows.

### Software requirements

#### Required

1. [Node](https://www.nodejs.org)
2. [Postgres](https://www.postgresql.org/download/)
    - this is until a fully mockable solution is found

#### Optional

1. [PgAdmin](https://www.postgresql.org/ftp/pgadmin3/pgadmin4/v1.2/windows/)
2. Docker
    - to host postgres you can pull down the pg container
    - by default the run script in the solution will also spark a node container

### Set up

_If using linux i recommend using docker as the set up should be less configurable_

**It is important that any changes to configuration below that you do NOT commit**

**You should also be working in your own branch to eliminate merging config changes**

1. Install node.js
2. Install postgres or if using Docker download and start the pg container
3. Add the databases
    - See [Database](https://git.firstmac.com.au/apis/processing-api/edit/master/README.md#database) for some more details on requirments and specifically permissions
    - You will require
        - v8
        - crumbs
        - pms
4. Clone this repo
5. From the repo directory run on the command line `npm install`
    - if using docker: `./run npm install`
6. Update the connection string in config\default.json and the v8Db setting to point to your instance
    - the user name will be either postgres or admsql, the password should be password
    - if on windows this may need to change to 172.0.0.1 (localhost)
    - if using docker this shouldnot change
7.  Running the app
    - on windows:
        - `npm start`
    - on linux and using docker (recommended)
        - `./run npm start`
8.  You can now test the application by running curl, postman etc.
    - you can experiment by using curl or postman to run a query (use the bearer tokens from the tests e.g test -> integration -> common.js add an Authorization header with Bearer "token")
    - tip on postman, hit https://localhost:3000 and click on proceed to add exclusion rule
9. Testing the application
    - Windows
        - npm test
        - #Windows# you need to slightly change the test and coverage paths a little.
            - `./node_modules/.bin/istanbul test ./node_modules/mocha/bin/_mocha -- --timeout 30000 -R spec`
        - windows needs to be: note also removing LOG_MUTE as windows seems not to like this
    - Linux is to remain as and can have the LOG_MUTE flag
        `./node_modules/.bin/istanbul test ./node_modules/.bin/_mocha -- --timeout 30000 -R spec`
    - _it is important any changes here are not committed_
10. Code Coverage
    - Windows
        - `npm run-script coverage`
    - on windows the path needs to change a little as:
        `./node_modules/.bin/istanbul cover ./node_modules/mocha/bin/_mocha -- -R spec`
    - Linux linux is to remain as and can have the LOG_MUTE flag
        `./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- -R spec`

## Development

This solution is a fully mockable solution please follow the mocking guidlines. There is no need for the database but if you wish to use it there is options below.

### Unit, integration testing and code coverage

#### Integration testing

Integration testing is required and the coverage must ensure that all possible scenarios are catered for. Here you will be ensuring the route functionality and any internal DB or service calls must be mocked.

#### Unit testing

Unit testing is only required should you have created what is known as a "service" file. This again must mock and subsequent DB or service calls.

#### Code Coverage

This is essential and the code coverage must cover all possible scenarios. If not at 100% a review will be conducted to assertain why it is not there, if this is not possible then please add into the task why.
As these are very modular components we should be able to reach 100%.

### Services

A service file is only required when the functionality is to be re-used or calls multiple functions. There should not be to many scenarios where we use services but one such service would for example be "creating a history note" and this is because this code could be called from numerous locations.

A service must have a unit test and code coverage to 100%, it will mock any service or DB calls that are within this service.


### Mocking

There are a couple of ways you can mock, these steps are to run before each unit test or to run on only certain tests.

The important step here is to add in certain items on each test.

To mock the DB you would declare the following constants:

_To mock sequelize to override functions such as findAll, query etc_

```
const dao = require('../../dao');
const sequelizeStub = dao.sequelize;
```

_To mock a particular entity_

```
const dao = require('../../dao');
const EmploymentDbStub = dao.v8.Employment;
```

When only doing on certain tests the scenario would commonly be where you want to replace simple responsed such as a single int, bool etc. 
This way some of the tests would just be testing the breaking of the route inputs and the simple calls be returning simple mocked data.

_Mocking a simple response type which uses a function_

```
  let _query =  sandbox.stub(sequelizeStub, 'query', () => {
          //return that it was successful
          return Q(1);
      });
```

_Mocking a simple response type which uses a function_

When replacing before each this is where you would want to return and check complex data and maniuplate that data into testing scenarios.

_Mocking a sequelize entity sample_

This is very useful when we want to replace functions such as `findById` or `findAll` etc. 

```
    //get the suite of filtered data
    let employmentData = require('./api-mocks/database/employments.json');
    //variable for the findAll method to be stubbed
    let _findAll;
    //before each test we need to replace functions
    beforeEach(() => {
        //stub the find all method
        _findAll = sandbox.stub(EmploymentDbStub, 'findAll', (id) => {
            //use lodash to filter out the data to mimic the where clause
            let data = _.filter(employmentData, { 'applicationPartyRoleID': id.where.applicationPartyRoleID });

            //return a promise of the filtered data
            return Q(data);
        });
    });

    //after each test we need to restore each function for the next iteration
    afterEach(() => {
        _findAll.restore();
    });
```

_Mocking a service sample_

```
     //get the suite of filtered data
      let queryData = require('./api-mocks/database/functions/Applicant_RetrieveRelationships.json');
      let rBody = require('./api-mocks/applicant-relationships/valid-request');

      let getData = (id) => {
          //use lodash to filter out the data to mimic the where clause
          let data = _.filter(queryData, { 'ApplicationPartyRoleID': id });
          //return a promise of the filtered data
          return data && data.length > 0 ? data[0].data : null;
      };

      //variable for the findAll method to be stubbed
      let serviceMock;

      //before each test we need to replace functions
      beforeEach(() => {
          //stub the find all method
          serviceMock = sandbox.stub(applicantService, 'relationships', (id, user) => {
              //return a promise of the filtered data
              return Q(getData(id));
          });
      });

      //after each test we need to restore each function for the next iteration
      afterEach(() => {
          serviceMock.restore();
      });
```

#### Notes for mocking

It is worth noting that when mocking sequelize inc entities and functions, you are able to reference from inputs the where clause, includes and parameters.

The following samples show the access

_Accessing the Where clause_

Note below the input param `filter` actually contains the information on the query filtering so we are able to access it.

```
  _findAll = sandbox.stub(EmploymentDbStub, 'findAll', (filter) => {
                    //use lodash to filter out the data to mimic the where clause
                    let data = _.filter(employmentData, { 'applicationPartyRoleID': filter.where.applicationPartyRoleID });

                    //return a promise of the filtered data
                    return Q(data);
                });
```

_Accessing function parameters_

You can see below by adding in the `query` and `filters` params we have access to the core info about the function execution. 
The `query` if you display it is actually the function name as it would execute in postgres. 
The `filters` actually shows you all the params you have set up to execute the function, you can see below in the `replacements` I now have access to the parameter of id being passed in.

```
  //stub the find all method
          _query = sandbox.stub(sequelizeStub, 'query', (query, filters) => {
              //return a promise of the filtered data
              return Q(getData(filters.replacements.fid, filters.replacements.tid));
          });
```


### Database

If you have access and wish to use the databases please follow these guidlines.

The main database involved for this project is `v8`. The api itself is mainly concerned with interacting with this database directly; this gives the enterprise a level of indirection when dealing with this database. [Sequelize](http://docs.sequelizejs.com/en/v3/) is the [ORM](https://en.wikipedia.org/wiki/Object-relational_mappingv) of choice here. The process gets bootstrapped each time there is a database schema mutation using [pg-generator](http://www.pg-generator.com/builtin-templates/sequelize/).

Before running the following commands, please ensure that you set up the sequelize templates folders.

#NOTE# this folder must be in the .gitignore file

```
./run node_modules/.bin/pgen template sequelize -t sequelize-template
```


The generation step, has now been bundled into the `package.json` file as an `npm` step. It can be invoked with the following command:

```
$ ./run npm run-script dbgen
```

The command that this short cut hides bundles up some instance details that may be of interest to a developer that doesn't keep their settings consistent with the team. Not tough to change this is `package.json`:

```
"dbgen": "node_modules/.bin/pgen exec sequelize-template -d v8 -u postgres -p password -t dao/model --host 172.17.0.1 --port 5430"
```

#### Other databases

For the processing api to be functional alongside the v8 database you will also need to ensure you have the following databases so please obtain back ups of these databases...

*crumbs
*pms

In order to be functional you will need to set up the foriegn data wrapper permissions by granting permissions.

The user may be set to either postgres or admsql, so please review your set up.

**V8**

Alter server v8 options (set host ‘localhost’);

ALTER USER MAPPING FOR [user] SERVER [crumbs] OPTIONS (user '[bob]user]', password 'password');

ALTER USER MAPPING FOR [user] SERVER [pms] OPTIONS (user '[bob]user]', password 'password');

**crumbs**

ALTER USER MAPPING FOR [user] SERVER [v8] OPTIONS (user '[bob]user]', password 'password');

ALTER USER MAPPING FOR [user] SERVER [pms] OPTIONS (user '[bob]user]', password 'password');

**pms**

ALTER USER MAPPING FOR [user] SERVER [v8] OPTIONS (user '[bob]user]', password 'password');

### Response Errors

This framework uses the restify-errors package and at no stage should any response have a hard coded http status code.

[Restify Errors](https://github.com/restify/errors)

So there should be _nothing_ like the following for errors:

```
res.send(400);
```

The restify equivalent is:

```
return next(new restifyErrors.BadRequestError());
```

Should you need to return a message make it small, so for example if inputs are wrong, do not return a large message. If there is more than one input being analyzed, you can construct something like the following...

```

    //filter out any missing required fields first
    let errorFields = _.filter([
                                !utils.ci(id) && "id",
                                !utils.ci(req.body.acId) && "acId",
                                !req.body.borrowerRoleType || (req.body.borrowerRoleType && !utils.ci(req.body.borrowerRoleType.id)) && "borrowerRoleType.id",
                                //have to use the utility to ensure this data as it is a boolean and !req.body.nominatedBorrower could be false
                                !utils.dataHasKey(req.body, "nominatedBorrower") && "nominatedBorrower",
                                !req.body.partyType || (req.body.partyType && !utils.ci(req.body.partyType.id)) && "partyType.id"
                                ], x => x);
  if (errorFields.length > 0) {
    return next(new restifyErrors.BadRequestError(errorFields.join()));
  }
```

## Conversion of API

Along with the documentation there is a helper guide providing notes on how to convert the current .NET apis in to node modules.

In some cases you will also be required to fill out the response body document in the api documentation, please see the column _Fill in Response Document_ and if true it will be your responsibility to fill it in. There may be _sample/pseudo_ items there as a guide.

Please follow this carefully.

## API Status Codes

| Status Code | Description | Notes |
|---|---|
| 200 | This will be the default success response and will usually result in no need to enter it in the res.send with your data. It is not a special code | Nil|
| 201 | This will be returned when a new item is created, the response will also contain the newly created identity | Nil |
| 204 | The item was successfully deleted | Nil |
| 400 | The bad request will be returned when there is input error faults | see _response errors_ |
| 404 | When an entity is not found a 404 will return | see _response errors_ |
| 500 | When an internal processing error occurs | see _response errors_ |

## Production

### Environment variables

When running the container, a set of environment variables can be supplied externally to control key connection points.

| Variable    | Config                      | Description                                                |
|-------------|-----------------------------|------------------------------------------------------------|
| `PG_V8` | `v8Db.connectionString` | Postgres connection string to the retail postgres database |
| `LS_HOST`   | `logger.logstash.host`      | The host of the logstash server                            |
| `LS_PORT`   | `logger.logstash.port`      | The port the logstash is listening on                      |

### Logging

By default, this container will log out to STDOUT using `bunyan` JSON formats. The option to send these logs to a logstash server is available from the configuration file:

```
"logger": {
  
  "logstash": {
    "host": "172.17.0.1",
    "port": 9908
  }

}
```

## Container

A `Dockerfile` accompanies this application to allow for easier deployment into container systems. 

### Building

To build thois

### Environment Variables

**TODO**

The following table details all of the environment variables that the container will respond to

| Variable                        | Description                                                              |
|---------------------------------|--------------------------------------------------------------------------|
| `VAR_A`                         | Something that `VAR_A` does |

### Startup

Once built, this container can be started with the following

```
$ docker run --rm -ti \
       -v $(pwd):/usr/src/app \
       -w /usr/src/app \
       -p 3000:3000 \
       node \
       $@
```

