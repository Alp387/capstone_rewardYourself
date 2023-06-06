FROM openjdk:19
ENV ENVIRONMENT=prod
LABEL maintainer="hasan.a.guerbuez@gmail.com"
ADD backend/target/rewardYourself.jar rewardYourself.jar
CMD [ "sh", "-c", "java -jar /rewardYourself.jar" ]