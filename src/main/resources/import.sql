DROP TABLE IF EXISTS TB_BOARD CASCADE;
CREATE TABLE TB_BOARD (IDX BIGINT GENERATED BY DEFAULT AS IDENTITY, CONTENTS VARCHAR(255), CREATED_BY VARCHAR(255), TITLE VARCHAR(255), CITY VARCHAR(255) , LIKES INT , PRIMARY KEY (IDX));

INSERT INTO TB_BOARD (IDX, TITLE, CONTENTS, CREATED_BY, CITY, LIKES) VALUES (1, '게시글 제목1', '게시글 내용1', '작성자1', 'Daejeon', 0, NOW());
INSERT INTO TB_BOARD (IDX, TITLE, CONTENTS, CREATED_BY, CITY, LIKES) VALUES (2, '게시글 제목2', '게시글 내용2', '작성자2', 'Daejeon', 0, NOW());
INSERT INTO TB_BOARD (IDX, TITLE, CONTENTS, CREATED_BY, CITY, LIKES) VALUES (3, '게시글 제목3', '게시글 내용3', '작성자3', 'Daejeon', 0, NOW());
INSERT INTO TB_BOARD (IDX, TITLE, CONTENTS, CREATED_BY, CITY, LIKES) VALUES (4, '게시글 제목4', '게시글 내용4', '작성자4', 'Daejeon', 0, NOW());
INSERT INTO TB_BOARD (IDX, TITLE, CONTENTS, CREATED_BY, CITY, LIKES) VALUES (5, '게시글 제목5', '게시글 내용5', '작성자5', 'Daegu', 0, NOW());
INSERT INTO TB_BOARD (IDX, TITLE, CONTENTS, CREATED_BY, CITY, LIKES) VALUES (6, '게시글 제목6', '게시글 내용6', '작성자6', 'Daegu', 0, NOW());
INSERT INTO TB_BOARD (IDX, TITLE, CONTENTS, CREATED_BY, CITY, LIKES) VALUES (7, '게시글 제목7', '게시글 내용7', '작성자7', 'Daegu', 0, NOW());
INSERT INTO TB_BOARD (IDX, TITLE, CONTENTS, CREATED_BY, CITY, LIKES) VALUES (8, '게시글 제목8', '게시글 내용8', '작성자8', 'Daegu', 0, NOW());
INSERT INTO TB_BOARD (IDX, TITLE, CONTENTS, CREATED_BY, CITY, LIKES) VALUES (9, '게시글 제목9', '게시글 내용9', '작성자9', 'Ulsan', 0, NOW());
INSERT INTO TB_BOARD (IDX, TITLE, CONTENTS, CREATED_BY, CITY, LIKES) VALUES (10, '게시글 제목10', '게시글 내용10', '작성자10', 'Ulsan', 0, NOW());
INSERT INTO TB_BOARD (IDX, TITLE, CONTENTS, CREATED_BY, CITY, LIKES) VALUES (11, '게시글 제목11', '게시글 내용11', '작성자11', 'Ulsan', 0, NOW());
INSERT INTO TB_BOARD (IDX, TITLE, CONTENTS, CREATED_BY, CITY, LIKES) VALUES (12, '게시글 제목12', '게시글 내용12', '작성자12', 'Ulsan', 0, NOW());
INSERT INTO TB_BOARD (IDX, TITLE, CONTENTS, CREATED_BY, CITY, LIKES) VALUES (13, '게시글 제목13', '게시글 내용13', '작성자13', 'Gwangju', 0, NOW());
INSERT INTO TB_BOARD (IDX, TITLE, CONTENTS, CREATED_BY, CITY, LIKES) VALUES (14, '게시글 제목14', '게시글 내용14', '작성자14', 'Gwangju', 0, NOW());
INSERT INTO TB_BOARD (IDX, TITLE, CONTENTS, CREATED_BY, CITY, LIKES) VALUES (15, '게시글 제목15', '게시글 내용15', '작성자15', 'Gwangju', 0, NOW());
INSERT INTO TB_BOARD (IDX, TITLE, CONTENTS, CREATED_BY, CITY, LIKES) VALUES (16, '게시글 제목16', '게시글 내용16', '작성자16', 'Gwangju', 0, NOW());