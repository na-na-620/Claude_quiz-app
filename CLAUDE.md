# Claude_quiz-app

一般常識クイズアプリ。HTML/CSS/JavaScriptのみで構成されたフロントエンド完結型アプリ。

## 技術スタック

- HTML5
- CSS3
- Vanilla JavaScript（フレームワーク・ライブラリなし）
- ビルドツールなし（静的ファイルをブラウザで直接開く）

## プロジェクト構成

```
Claude_quiz-app/
├── index.html        # エントリーポイント
├── css/
│   └── style.css     # スタイル定義
├── js/
│   └── app.js        # アプリケーションロジック
└── data/
    └── questions.js  # クイズ問題データ
```

## 開発方針

- 外部依存なし。CDNも使わない。
- `index.html` をブラウザで直接開けば動作する。
- ファイルを分割する場合は ES Modules（`type="module"`）を使う。

## コーディング規約

- インデント: スペース2つ
- 文字コード: UTF-8
- コメントは日本語で書いてよい
- `var` は使わない。`const` を優先し、再代入が必要な場合のみ `let`
- DOM操作は `querySelector` / `querySelectorAll` を使う

## クイズ仕様

- 問題形式: 4択選択式
- 問題データは `data/questions.js` に配列で管理
- 各問題オブジェクトの構造:

```js
{
  question: "問題文",
  choices: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
  answer: 0,  // 正解のインデックス（0始まり）
  explanation: "解説文"
}
```

## GitHubリポジトリ

https://github.com/na-na-620/Claude_quiz-app.git

## 動作確認

```
index.html をブラウザで直接開く
```

ローカルサーバーが必要な場合（ES Modules使用時）:

```bash
npx serve .
# または
python -m http.server 8080
```
