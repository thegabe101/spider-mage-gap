#!/bin/bash

exec /opt/keycloak/bin/kc.sh --verbose start-dev --db-url jdbc:postgresql://postgres/keycloak --proxy edge --spi-login-protocol-openid-connect-legacy-logout-redirect-uri=true  #--auto-build
