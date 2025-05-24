# ステージ1: ビルド環境
FROM node:20-alpine AS builder

WORKDIR /app

# package.json と package-lock.json (あれば) をコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# プロジェクトのソースコードをコピー
COPY . .

# アプリケーションをビルド
RUN npm run build

# ステージ2: ランタイム環境
FROM node:20-alpine

WORKDIR /app

# serve パッケージをインストールして静的ファイルを提供
RUN npm install -g serve

# ビルドステージからビルド成果物 (dist ディレクトリ) をコピー
COPY --from=builder /app/dist ./dist

# アプリケーションがリッスンするポートを指定
EXPOSE 8080

# アプリケーションを起動
CMD ["serve", "-s", "dist", "-l", "8080"]
