# React + Vite TODO アプリケーション

このリポジトリは、ReactとViteを使用して作成されたシンプルなTODOアプリケーションのプロジェクトです。

## 概要

ユーザーがタスクを登録し、その進捗を管理できる基本的なTODOリスト機能を提供します。
詳細な要件や設計については、以下のドキュメントを参照してください。

## ドキュメント

このプロジェクトでは、ソフトウェア開発ライフサイクル（SDLC）に基づき、以下のドキュメントを作成・管理しています。

-   **[01_要件定義](./docs/01_requirements.md)**: アプリケーションの機能要件、非機能要件、ターゲットユーザー、利用シーンなどを定義しています。
-   **[02_設計](./docs/02_design.md)**: UI/UXデザイン、技術選定、システムアーキテクチャなど、アプリケーションの設計方針を定義しています。
-   `docs/03_implementation_guidelines.md` (今後作成予定): 実装に関するガイドライン（コーディング規約、ブランチ戦略など）。
-   `docs/04_testing_strategy.md` (今後作成予定): テスト戦略（テスト計画、テストケースの作成方針など）。
-   `docs/05_deployment_plan.md` (今後作成予定): デプロイ計画（デプロイ手順、環境設定など）。
-   `docs/06_maintenance_policy.md` (今後作成予定): 保守ポリシー（バグ修正プロセス、アップデート方針など）。

## 開発環境のセットアップ

このテンプレートは、HMR（ホットモジュールリプレイスメント）といくつかのESLintルールを備えたViteでReactを動作させるための最小限のセットアップを提供します。

現在、2つの公式プラグインが利用可能です:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) は Fast Refresh のために [Babel](https://babeljs.io/) を使用します。
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) は Fast Refresh のために [SWC](https://swc.rs/) を使用します。

### ESLint設定の拡張

本番アプリケーションを開発している場合は、型認識可能なlintルールを有効にしたTypeScriptの使用をお勧めします。TypeScriptと[`typescript-eslint`](https://typescript-eslint.io)をプロジェクトに統合する方法については、[TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)を参照してください。

### 推奨されるIDEセットアップ

-   [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (以前は `Vetur`) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### コマンド

プロジェクトのセットアップと実行に必要な基本的なコマンドです。

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# ビルドしたファイルのプレビュー
npm run preview

# ESLintの実行
npm run lint
