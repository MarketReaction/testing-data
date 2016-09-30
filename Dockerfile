FROM partlab/ubuntu-arm-mongodb

ADD entrypoint.sh /entrypoint.sh
ADD testData.js /testData.js

RUN chmod 755 /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]