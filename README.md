# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

# TODOアプリ 要件定義

## 1. 概要

シンプルなTODO管理アプリケーションを開発する。ユーザーはタスクを登録し、進捗を管理できる。

## 2. 検討項目

### 2.1. 機能要件

#### 2.1.1. 必須機能

-   **タスクの追加**: 新しいタスクを入力し、リストに追加できる。
-   **タスクの表示**: 登録されたタスクを一覧で表示できる。
-   **タスクの編集**: 既存のタスクの内容を編集できる。
-   **タスクの削除**: タスクをリストから削除できる。
-   **タスクの完了/未完了状態の管理**: タスクの完了状態を切り替えられる。

#### 2.1.2. 追加機能（検討）

-   **タスクの優先度設定**: タスクに優先度（高・中・低など）を設定できる。
-   **タスクの期限設定**: タスクに期限日を設定できる。
-   **タスクのフィルタリング**: 以下の条件でタスクを絞り込んで表示できる。
    -   すべて
    -   未完了
    -   完了済み
    -   優先度順
-   **タスクの検索**: キーワードでタスクを検索できる。
-   **データ永続化**: アプリを閉じてもタスク情報が保持される（ローカルストレージを利用）。

### 2.2. 非機能要件

-   **ユーザビリティ**:
    -   シンプルで直感的に操作できるインターフェース。
    -   初めてのユーザーでも迷わずに使えること。
-   **パフォーマンス**:
    -   タスクの追加、表示、編集、削除などの操作がスムーズに行えること。
    -   多数のタスクが登録されても、表示速度が著しく低下しないこと。
-   **保守性**:
    -   コードはリーダブルで、理解しやすい構造であること。
    -   機能追加や修正が容易に行える設計であること。
-   **アクセシビリティ**:
    -   基本的なアクセシビリティ標準に準拠し、多くのユーザーが利用しやすいように配慮する。
-   **互換性**:
    -   主要なモダンブラウザ（Chrome, Firefox, Safari, Edgeの最新版）で正常に動作すること。

### 2.3. ターゲットユーザー

-   個人利用を目的とするユーザー。
-   日々のタスク管理を簡単に行いたい学生や社会人。
-   複数のプロジェクトやタスクを抱えているが、複雑な機能は不要なユーザー。

### 2.4. 利用シーン

-   個人の日々のタスク（勉強、仕事、私生活の用事など）の管理。
-   小規模なチームやグループでの短期的なタスク共有（データ永続化がローカルストレージの場合、共有は限定的）。
-   買い物リスト、読書リスト、見たい映画リストなどの個人的なリスト管理。
-   イベントの準備や旅行の計画など、ステップごとのタスク管理。

### 2.5. データに関する要件

-   **管理するタスク情報**:
    -   タスクID（一意）
    -   タスク名（必須）
    -   タスク詳細（任意）
    -   作成日時
    -   更新日時
    -   完了フラグ（未完了/完了）
    -   優先度（高・中・低など、追加機能）
    -   期限日（追加機能）
-   **データ永続化**:
    -   当面はクライアントサイドのローカルストレージを利用する。
    -   将来的にはサーバーサイドDBへの移行も視野に入れる（ただし本プロジェクトのスコープ外とする可能性あり）。

### 2.6. 制約条件

-   **開発期間**: （ユーザーと相談の上決定）
-   **技術スタック**: React, Vite をベースとする。その他必要なライブラリは適宜選定。
