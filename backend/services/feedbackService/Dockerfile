FROM postgres:16-alpine
WORKDIR /app
COPY /backend/feedbackService/feedback.ts /app/feedback.ts
ENTRYPOINT [ "npm", "run", "index.ts" ]
