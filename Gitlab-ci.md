# Gitlab-ci

**_Run Gitlab-ci locally._**

Executing the **Gitlab-ci** pipelines in the local environment will allow you to set up `.gitlab-ci.yml`, and to verify that everything is working as intended.

**Register gitlab-runner**

```
docker run --rm -it \
-v /srv/gitlab-runner/config:/etc/gitlab-runner gitlab/gitlab-runner \
register
```

optionally as a shortcut, you can run the command `gitlab-register-runner.sh`

```
chmod +x gitlab-register-runner.sh

```

then use it as

```
./gitlab-register-runner.sh
```

To register the gitlab-runner, you will be prompted for:

- GitLab instance URL -> `https://gitlab.com`
- Registration token -> [token]
  you can obtain it:
  `https://gitlab.com/[your gitlab]/settings/ci_cd`, expand runners and copy the registration token.

**Start a runner container**

```
docker run -d --rm --name gitlab-runner \
    -v $PWD:$PWD \
    -v /var/run/docker.sock:/var/run/docker.sock \
    gitlab/gitlab-runner:latest
```

optionally as a shortcut, you can run the command `gitlab-runner.sh`

```
chmod +x gitlab-runner.sh
```

then use it as

```
./gitlab-runner.sh
```

docker container name `gitlab-runner`

**Execute the job**

```
docker exec -it -w $PWD gitlab-runner git config --global --add safe.directory "*" &&  docker exec -it -w $PWD gitlab-runner gitlab-runner exec docker [job name]
```

optionally as a shortcut, you can run the command `gitlab-execute.sh`

```
chmod +x gitlab-execute.sh
```

then use it, passing the job name as parameter

```
./gitlab-execute.sh [job name]

```
