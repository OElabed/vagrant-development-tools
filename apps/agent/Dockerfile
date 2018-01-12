FROM java:8-jre

ADD ./build/libs/*.jar /app/app.jar
CMD ["java", "-Xmx200m", "-jar", "/app/app.jar"]

EXPOSE 8080