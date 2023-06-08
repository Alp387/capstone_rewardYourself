FROM openjdk:19
ENV ENVIRONMENT=prod
LABEL maintainer="hasan.a.guerbuez@gmail.com"
EXPOSE 8080
ADD backend/target/rewardyourself.jar rewardyourself.jar
CMD [ "sh", "-c", "java -jar /rewardyourself.jar" ]