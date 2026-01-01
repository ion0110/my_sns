# SNSリンク集約ページ

lit.linkのようなSNSリンクを集約するシンプルでスタイリッシュなダークモードのwebページです。

## 特徴

✨ **スタイリッシュなダークモード**
- グラデーション背景
- グラスモーフィズム効果
- スムーズなアニメーション

🎨 **モダンなデザイン**
- カスタムアイコン
- ホバーエフェクト
- レスポンシブ対応

🚀 **Vervelデプロイ対応**
- 静的HTMLファイル
- ビルド不要
- ワンクリックデプロイ

## ローカル開発

### 1. シンプルなHTTPサーバーを起動

```bash
# npx serveを使用
npx serve .
```

または

```bash
# Pythonを使用（Python 3がインストールされている場合）
python -m http.server 8000
```

### 2. ブラウザで確認

ブラウザで `http://localhost:3000`（または `http://localhost:8000`）を開きます。

## Vercelへのデプロイ

### 方法1: Vercel CLI

```bash
# Vercel CLIをインストール
npm install -g vercel

# プロジェクトディレクトリでデプロイ
vercel
```

### 方法2: Vercel Webインターフェース

1. [Vercel](https://vercel.com)にアクセスしてログイン
2. 「New Project」をクリック
3. GitHubリポジトリをインポート、または直接ファイルをアップロード
4. 「Deploy」をクリック

数秒でデプロイが完了し、公開URLが発行されます！

## カスタマイズ方法

### プロフィール情報の変更

[`index.html`](file:///c:/Users/ion/Documents/Antigravity/index.html) を編集：

```html
<!-- 名前を変更 -->
<h1 class="profile-name">あなたの名前</h1>

<!-- 自己紹介を変更 -->
<p class="profile-bio">あなたの肩書き / 職業</p>
```

### SNSリンクの変更

[`index.html`](file:///c:/Users/ion/Documents/Antigravity/index.html) を編集：

```html
<!-- Xのリンクを変更 -->
<a href="https://x.com/あなたのユーザー名" ...>

<!-- Threadsのリンクを変更 -->
<a href="https://www.threads.net/@あなたのユーザー名" ...>
```

### リンクの追加

新しいSNSリンクを追加するには、[`index.html`](file:///c:/Users/ion/Documents/Antigravity/index.html) の `links-section` 内に以下のようなコードを追加します：

```html
<a href="あなたのURL" target="_blank" rel="noopener noreferrer" class="link-button">
    <div class="link-icon">
        <!-- SVGアイコン -->
    </div>
    <span class="link-text">サービス名</span>
    <div class="link-arrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
        </svg>
    </div>
</a>
```

### カラーの変更

[`styles.css`](file:///c:/Users/ion/Documents/Antigravity/styles.css) のCSS変数を編集：

```css
:root {
    --color-bg-primary: #0a0a0f;  /* 背景色 */
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);  /* グラデーション */
    /* ... その他の色 */
}
```

### プロフィール画像の変更

1. `assets/profile.jpg` を自分の画像に置き換える
2. または [`index.html`](file:///c:/Users/ion/Documents/Antigravity/index.html) の画像パスを変更

```html
<img src="assets/your-image.jpg" alt="プロフィール画像" class="avatar">
```

## ファイル構成

```
.
├── index.html       # メインHTMLファイル
├── styles.css       # スタイルシート
├── script.js        # JavaScriptファイル
├── vercel.json      # Vercel設定
├── README.md        # このファイル
└── assets/          # 画像ファイル
    └── profile.jpg  # プロフィール画像
```

## 技術スタック

- **HTML5**: セマンティックなマークアップ
- **CSS3**: Vanilla CSS（グラデーション、グラスモーフィズム、アニメーション）
- **JavaScript**: バニラJS（アニメーション制御）
- **フォント**: Google Fonts - Outfit

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。自由に使用・改変してください。

---

**作成日**: 2026年1月1日
