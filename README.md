# node-tmu

NodeJS based Test Management Utility

## Managing dependencies

Some basic system dependencies are managed using puppet in the /puppet directory.
For now, all you need to do is install puppet and run ```puppet apply puppet/deps.pp``` 
as root to get your dependencies installed.  This works on Ubuntu, but I cannot 
guarantee it working on other systems.

For NodeJS dependencies, just run ```npm install```.

## Running the tests

```npm test``` will do it and output results and code coverage information.

## Running the tmu server

```npm start``` will start up the server.

## Contacting Us

Send @LVCSkunkworkds a message on twitter or create an issue to get a hold of us!

Follow @LVCSkunkworks, @lvcodesmith, and @punkdgeek to get the latest on ```node-tmu```.
