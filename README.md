# ニュースキンジャパン 社会貢献活動

## Requirements

- Node.js <= 16.17.0
- npm <= 7.10.0

※ Windows 環境では検証していません

## Usage

### 事前準備

以下のコマンドで開発に必要な node modules をインストールします

```shell
$ npm install
```

### 開発時

以下のコマンドで開発ディレクトリが watch 状態になり、webpack-dev-server（ローカルでの確認用簡易サーバー）が立ち上がります

```shell
$ npm start
```

### プロダクションビルド時

以下のコマンドでビルドされたファイルが成果物ディレクトリへ生成されます
ビルド時に eslint が走り、js,typescript,pug の lint も実行されます

```shell
$ npm build:
$ npm build:
```

### ディレクトリ構造

```
.
├── public  // 成果物ディレクトリ（.gitignoreされているのでgitにはプッシュされません）
└── src   // 開発ディレクトリ
    ├── _includes  // pugの各パーシャルファイル
    └── assets  // アセットファイル
        ├── css     // sass,scssファイル
        ├── images  // 画像ファイル
        └── js      // js,typescript
```

`src`ディレクトリの内容はビルドすることで`dist`へディレクトリ構造を維持したまま生成されます

## コンパイル環境

- テンプレートエンジン - pug
- CSS プリプロセッサ - sass（一部 scss）
  - `dart-sass` -> `post-css` (plugin: `autoprefixer`, `postcss-flexbugs-fixes`, `css-nano`）
  - `node-sass-glob-importer` を利用し glob 形式で sass の読み込みを可能にしている
- JavaScript
  - `babel-loader`経由でコンパイル
- バンドラー - webpack
  - pug, js, sass, 画像など依存関係を解決しビルドする

## ディレクトリ構成

- 開発ディレクトリ - `src`
- 開発ディレクトリ - `dev`
- 成果物ディレクトリ - `public` （ignore しているので git には commit されません）

開発ディレクトリの構造を維持したまま成果物ディレクトリにファイルが生成されます

### src ディレクトリの構造

```
src
├── _includes // pugのinclude用ディレクトリ
├── assets
│   ├── css // sass, scssディレクトリ
│   ├── images // 画像ディレクトリ
│   └── js // jsディレクトリ
│       └── @types // 定義ファイルディレクトリ
│
```

## パスの解決

typescript や画像のパス解決は以下のように記述します

### Typescript

```typescript
import foo as bar from '@/baz'
```

（`@` は `assets/js` のエイリアス）

### pug

```pug
img(src=require('assets/images/foo.jpg').default)
```

SVG をインラインで読み込む場合はファイル名を`*.inline.svg`とし以下のように記述してください

```pug
!= require('src/assets/images/bar.inline.svg').default
```

### sass

```sass
.foo
  background-image: url(~assets/images/foo.jpg)
```

## GIT の運用について

![gitflow図](./images/gitflow.drawio.svg)

- `master`から`release/ph1`のようにリリースフェイズもしくはエンハンスフェイズ単位ごとにリリースブランチを作成し、そこから`feature/dev`のような形で開発ブランチを作成し、適宜リリースブランチへマージする
- リリース後のバグ対応については hotfix ブランチを作成する

※ feature から release ブランチへのマージは`squash`マージをし（細かな開発時の履歴は残さない）、それ以外は`non-fast-forward`でマージする（開発時の細かい作業ログを残さないため）
