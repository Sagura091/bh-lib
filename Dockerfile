FROM pierrezemb/gostatic

ADD demo/resources/public /srv/http/

EXPOSE 80

WORKDIR /

