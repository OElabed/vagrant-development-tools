#!/usr/bin/env bash

./gradlew sonarqube -Dsonar.host.url=http://localhost:9000 -Dsonar.jdbc.url="jdbc:h2:tcp://localhost/sonar"