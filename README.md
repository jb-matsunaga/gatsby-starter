# Gatsby × GraphQL × WP
- [WordPress Source Plugin Tutorial](https://www.gatsbyjs.org/docs/wordpress-source-plugin-tutorial/)  

## [gatsby-source-wordpress](https://www.gatsbyjs.org/packages/gatsby-source-wordpress/?=wordpress)  
WordPress REST APIを使用してWordPressサイトからGatsbyにデータをプルするためのソースプラグイン。

### Features
- 自分でホストされているWordPressサイト、またはWordPress.comでホストされているサイトからデータを取り出す
- 任意の数の投稿で作業する必要がある（900件の投稿があるサイトでテスト済み）
- OAuth2を使ってwordpress.comのAPIを認証できるので、メディアに問い合わせることができる
- WordPressの画像からGatsbyで簡単にレスポンシブル画像を作成できる *[Image processing](https://www.gatsbyjs.org/packages/gatsby-source-wordpress/?=wordpress#image-processing)

## [Environment Variables](https://www.gatsbyjs.org/docs/environment-variables)
### Environments and Environment Variables
サイトに環境変数を設定して、さまざまな環境で動作をカスタマイズすることができる。

ここでは、さまざまなデプロイメント環境で使用するために特別な場所で定義された変数と、コマンドライン呼び出しなどで使用できる実際のOSレベルの環境変数を区別する必要があることに注意。"Project Env Vars"と "OS Env Vars"を呼ぶ。どちらの場合も、私たちがいる環境に対して、これらの変数の関連する値にアクセスできるようにしたいと考えている。

By default gatsby supports only 2 environments:
- If you run gatsby develop, then you will be in the ‘development’ environment.
- If you run gatsby build + gatsby serve, then you will be in the ‘production’ environment.

他の環境を定義する場合は、もう少し作業を行う必要がある。下記の「追加の環境」を参照。

### Accessing Environment Variables in JavaScript
すべてのプロジェクトおよび OS Env Varsは、ビルド時または Node.Js の実行時にのみ直接使用できる。
クライアントコードの実行時にすぐには利用できない。
クライアントサイドのJavaScriptに積極的にキャプチャして埋め込む必要がある。これは、Webpackの [DefinePlugin](https://webpack.js.org/plugins/define-plugin/) を使用してビルド中に達成される。
環境変数がクライアント側に埋め込まれると、グローバル変数 `process.env` からアクセスできる。
OS Env Vars は、同じ `process.env` グローバル変数から Node.js にアクセスできる。

これらの変数はビルド時に埋め込まれているため、devサーバーを再起動するか、変更後にサイトを再構築する必要がある。

### Defining Environment Variables
#### Client-side JavaScript
クライアント側のブラウザは、JavaScriptにアクセスしたいプロジェクトの Envバール のために、ルートフォルダ に 環境設定ファイル、`.env.development` および/または `.env.production` を、定義することができる。アクティブな環境に応じて、正しいものが見つけられ、ブラウザのJavaScriptにその値が環境変数として埋め込まれる。

`.env.*`ファイル で定義されているこれらのプロジェクト環境変数に加えて、OS Env Varsも定義できる。
接頭辞 `GATSBY_` が付いたOS Env Varsは、ブラウザのJavaScriptで利用可能になる。

#### Server-side Node.js
GatsbyはいくつかのNode.jsスクリプトを実行し、特にgatsby-config.jsとgatsby-node.jsを構築する。
OS Env Varsは、ノードの実行中にすでに使用可能になっているので、環境変数を通常の方法で追加することができる。
ホスト/ビルドツール、OS、またはコマンドラインでGatsbyを呼び出すときに環境変数を追加する。

In Linux terminals this can be done with:
```
MY_ENV_VAR=foo gatsby develop
```

`.env.*` ファイルで定義したプロジェクト環境変数は、Node.jsスクリプトではすぐに使用できない。
これらの変数を使用するには、NPMパッケージの [dotenv](https://www.npmjs.com/package/dotenv) を使用してアクティブな `.env.*` ファイルを調べ、それらの値を添付する。
これは既にGatsbyの依存関係になっているので、gatsby-config.js または gatsby-node.js でこれを要求することができる。

```
# gatsby-config.js

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
```
これで変数はいつものようにprocess.envで利用可能になった。

### Example
```
# Example .env.development file

API_URL=https://dev.example.com/api
```
```
# Example .env.production file

API_URL=https://example.com/api
```
これらの変数は、process.env.API_URLとしてサイトで使用できる。
```
// usage
render() {
  return (
    <div>
      <img src={`${process.env.API_URL}/logo.png`} alt="Logo" />
    </div>
  )
}
```

### Reserved Environment Variables:
特定の環境変数をオーバーライドすることはできません。ビルド中に内部的に最適化が行われるため。
- `NODE_ENV`
- `PUBLIC_DIR`

### Additional Environments (Staging, Test, etc)
上記のように、`NODE_ENV` は Reat や他のモジュールをコンパイルする際にキー最適化を行うためにビルドシステムが必要とするため、Gatsbyの予約済みの環境変数。このため、追加の環境サポートのためにセカンダリ環境変数を使用し、クライアント側のコードで環境変数を手動で使用できるようにする必要がある。

独自のOS Env Varを定義してアクティブな環境を追跡し、関連するProject Env Varsをロードするように設定することができる。

Gatsby自体はそのOS Env Varで何もしないが、gatsby-config.jsで使うことができる。
具体的には、dotenvと個々のOS Env Varを使用して.env.myCustomEnvironmentファイルを見つけ、module.exportsを使用してProject Env Varsを、クライアント側のJavascriptが（GraphQLクエリを介して）値にアクセスできる場所に保存することができる。

例えば。カスタムGoogleアナリティクストラッキングIDと専用のapiUrlを使用してステージング環境を追加する場合は、プロジェクトのルートに.env.stagingを追加するには、gatsby-config.jsに以下の変更を加える。

#### Example
```
# .env.staging
GA_TRACKING_ID="UA-1234567890"
API_URL="http://foo.bar"
```
```
# gatsby-config.js
let activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
    apiUrl: process.env.API_URL,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
  ],
}
```
これにより、関連する環境の `.env.*` ファイルから値がロードされ、GraphQLクエリとアナリティックプラグインを介して利用可能になる。
`ACTIVE_ENV` は何かを呼び出すことができることに注意。
これはGatsbyの何か他のものによって使われていないか知られていない（前述の `NODE_ENV` ではなく）。

ステージング環境のローカルテストは、次の方法で行うことができる。
```
ACTIVE_ENV=staging gatsby develop
```

## [gatsby-source-graphql](https://www.gatsbyjs.org/packages/gatsby-source-graphql/)
## [WPGraphQL](https://github.com/wp-graphql/wp-graphql)
