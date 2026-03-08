# IGRS B2B Website

フィリピン案件を扱う日本の弁護士・司法書士・行政書士・事業者向けB2Bサイト。

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router, Static Export)
- **スタイル**: Tailwind CSS 4
- **i18n**: next-intl
- **フォーム**: React Hook Form + Zod + Formspree
- **デプロイ**: Cloudflare Pages

## ローカル開発

```bash
npm install
npm run dev
```

`http://localhost:3000` → 自動的に `/ja` にリダイレクト

## ビルド

```bash
npm run build
```

`out/` ディレクトリに静的ファイルが生成される。

## Cloudflare Pages デプロイ設定

| 設定項目 | 値 |
|---------|---|
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | (空欄) |
| Node.js version | 20 |

## Formspree設定

`src/components/forms/ContactForm.tsx` の `FORMSPREE_ENDPOINT` を実際のFormspree URLに変更してください。

```typescript
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
```

## ページ構成

| パス | ページ |
|-----|--------|
| `/ja` | トップページ |
| `/ja/services` | サービス一覧 |
| `/ja/inheritance` | 相続・不動産 |
| `/ja/contact` | お問い合わせ |
| `/ja/company` | 会社情報 |

## 会社情報

- **会社名**: 株式会社ＩＧＲＳ
- **法人番号**: 2170001016118
- **所在地**: 和歌山県和歌山市
