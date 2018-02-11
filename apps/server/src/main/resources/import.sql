
-- the password hash is generated by BCrypt Calculator Generator(https://www.dailycred.com/article/bcrypt-calculator)
INSERT INTO USER (ID, LOGIN, PASSWORD, FIRST_NAME, LAST_NAME, LOCKED, ENABLE, EXPIRE_DATE) VALUES (1, 'user', '$2a$04$Q71G1QmWWOZjJEkwRqO7Se/aYrZBu9DAi1apadFQujdnPXfutGK4u', 'Fan', 'Jin', 0, 1, TO_DATE('17/12/2019', 'DD/MM/YYYY'));
INSERT INTO USER (ID, LOGIN, PASSWORD, FIRST_NAME, LAST_NAME, LOCKED, ENABLE, EXPIRE_DATE) VALUES (2, 'admin', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Jing', 'Xiao', 0, 1, TO_DATE('17/12/2019', 'DD/MM/YYYY'));

INSERT INTO AUTHORITY (ID, NAME) VALUES (1, 'ROLE_USER');
INSERT INTO AUTHORITY (ID, NAME) VALUES (2, 'ROLE_ADMIN');

INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (1, 1);
INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (2, 1);
INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (2, 2);


INSERT INTO DATA_PACKAGE_TEMPLATE (ID, NAME, CONTENT) VALUES (1, 'DEFAULT', FILE_READ('src/main/resources/data/package-default.yml', NULL));
