import React from 'react';
import './App.css';

// 仮のヘッダーコンポーネント
function DashboardHeader() {
  return (
    <header className="dashboard-header">
      <div className="header-left">
        {/* ハンバーガーメニューアイコンなどをここに配置可能 */}
        <span className="project-name">tbs-ai-metadata</span>
      </div>
      <div className="header-right">
        {/* 検索バーやユーザーアイコンなどをここに配置可能 */}
        <span>ユーザーアイコン</span>
      </div>
    </header>
  );
}

// 仮のカードコンポーネント
function InfoCard({ title, children }) {
  return (
    <div className="info-card">
      <h3>{title}</h3>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

// メインのダッシュボードコンポーネント
function App() {
  return (
    <div className="dashboard-container">
      <DashboardHeader />
      <main className="dashboard-main">
        <section className="welcome-section">
          <h2>ようこそ</h2>
          <p>プロジェクト: tbs.co.jp {'>'} tbs-ai-metadata</p>
          {/* プロジェクト番号やIDなども表示可能 */}
        </section>

        <section className="quick-access-section">
          <h3>クイックアクセス</h3>
          <div className="cards-container">
            <InfoCard title="API とサービス">
              <p>APIの管理とサービスの有効化</p>
              {/* アイコンやリンクをここに追加可能 */}
            </InfoCard>
            <InfoCard title="IAM と管理">
              <p>アクセス権の管理</p>
            </InfoCard>
            <InfoCard title="課金">
              <p>請求と予算の管理</p>
            </InfoCard>
            <InfoCard title="Compute Engine">
              <p>仮想マシンの作成と管理</p>
            </InfoCard>
            <InfoCard title="Cloud Storage">
              <p>オブジェクトストレージ</p>
            </InfoCard>
            <InfoCard title="BigQuery">
              <p>データウェアハウス</p>
            </InfoCard>
            {/* 他のカードも追加可能 */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
