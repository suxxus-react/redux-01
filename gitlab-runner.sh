docker run -d --rm --name gitlab-runner \
    -v $PWD:$PWD \
    -v /var/run/docker.sock:/var/run/docker.sock \
    gitlab/gitlab-runner:latest


