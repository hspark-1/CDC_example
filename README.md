## 🗺️ 프로젝트 로드맵: Express.js + CDC (MySQL → Kafka → ElasticSearch)

### ✅ 1. Express.js 서버 초기 구현
- [x] `index.js`로 웹 서버 실행
- [x] `/submit`, `/users` 라우트 구현 (MySQL 연동)
- [x] `views/index.html`에서 입력 폼 제공

---

### ✅ 2. Docker 환경 준비 (개발 편의성)
- [x] `Dockerfile` 설정 (Node.js + `npm run dev`)
- [x] `docker-compose.yml`로 MySQL + Express 통합 구성
- [x] `docker-compose.override.yml`로 개발용 설정 적용
- [x] `nodemon` 설치 및 `dev` 스크립트 작성
- [x] 코드 변경 시 핫리로드 (`volumes` + `command`)
- [x] `db.js`에 MySQL 연결 재시도 로직 적용
- [x] `process.exit(1)`로 연결 실패 시 종료
- [x] `restart: unless-stopped`로 Docker 자동 재시작 설정
- [x] `.gitignore` 생성 및 불필요한 파일 무시

---

### 🧪 3. Express API 테스트 (추후 예정)
- [ ] Postman 또는 `curl`로 `/submit`, `/users` 테스트
- [ ] Jest로 유닛 테스트 작성
- [ ] 잘못된 요청 시 오류 처리 확인

---

### 🚧 4. CDC 파이프라인 구성
#### 🔹 MySQL → Kafka (Debezium)
- [ ] Kafka, Zookeeper, Kafka Connect, Debezium 컨테이너 구성
- [ ] MySQL 설정: binlog, server-id 등 CDC를 위한 옵션 적용
- [ ] Debezium MySQL Source Connector 설정
- [ ] Kafka 토픽에서 MySQL 변경 데이터 수신 확인

#### 🔹 Kafka → ElasticSearch
- [ ] ElasticSearch 컨테이너 구성
- [ ] Kafka Connect ElasticSearch Sink Connector 설정
- [ ] 변경된 데이터가 ES에 저장되는지 확인

---

### 🌐 5. 실시간 데이터 웹페이지 표시
- [ ] Kafka Consumer 구현 (Node.js 또는 KafkaJS 사용)
- [ ] Express 서버에서 이벤트를 브라우저에 전달 (SSE or WebSocket)
- [ ] 실시간 변경 사항을 HTML 페이지에서 확인 가능하게 구현

---

### 📦 6. 배포 및 운영 (선택)
- [ ] `.env` 파일로 환경 설정 분리
- [ ] Nginx 리버스 프록시 + HTTPS 구성
- [ ] 로그 수집/모니터링 도구 연동 (ELK, Prometheus 등)

---

### ✨ 보너스 (옵션)
- [ ] Kafka 메시지 가공 및 필터링 처리
- [ ] ElasticSearch에 저장된 데이터 기반 검색 API 구현
- [ ] 대시보드 형태의 관리 페이지 구현
