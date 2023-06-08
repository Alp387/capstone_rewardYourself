FROM openjdk:19
ENV ENVIRONMENT=prod
LABEL maintainer="hasan.a.guerbuez@gmail.com"
ADD backend/target/rewardyourself.jar rewardyourself.jar
CMD [ "sh", "-c", "java -jar /rewardyourself.jar" ]