# React TPL

## Install:

```
npm install

```

## Usage:

**_To initiate development_**

You can develop it by executing the `start` command, which will activate the application on `port 4000`.

Optionally, you can run the app in a Docker container on `port 3112`.

## Scripts:

The `package.json` file comes with the following scripts

- `start` to start development `port:4000`.
- `lint` to run ESLint.
- `tsc` to check _.ts _.tsx files.
- `tsc:watch` to watch _.ts _.tsx files.
- `test` to run jest suite.
- `test:watch` to watch app \_.ts, \_.tsx tests.
- `cy:dev:open` run E2E tests on Browser. Used to create locally-run E2E tests against the dev\_\_mind-sound container on port 3112.
- `cy:dev:ci` run E2E cli tests. Used to create locally-run E2E tests against the dev\_\_mind-sound container on port 3112.
- `cy:predeploy:ci` run E2E cli. Used to check locally executed E2E tests against the preprod\_\_mind-sound container on port 8110.
- `check:prj` run lint typescript and jest tests.
- `prepare` install husky.
- `build` to compile a version to be deployed.

## Docker:

npm install if you haven't done it yet.

### Develop

```
docker compose up

```

docker container name `dev__mind-sound`, port: `3112`

---

### Deploy (pre-production)

- Preview on local environment.

You may run a compilation version in a local environment to verify that everything is working as expected before deploying it to the production environment.

From the project root, run

```
docker compose up --build

```

docker container name `preprod_mind-sound`

**A compiled version will be displayed on localhost:8110**
