# B2B Immigration Redesign Plan

## コンセプト
現在の「弁護士・司法書士向け フィリピン案件外注パートナー」から、
**「行政書士・登録支援機関・特定技能雇用企業向け フィリピン人材に関する課題解決パートナー」**に完全転換。

ホームページは**課題提起型**（「困っていませんか？」問いかけスタイル）で、
ターゲットが自分事として共感できるメッセージングに変更する。

---

## ページ構成（既存5ページ + 新規6ページ = 合計11ページ）

### 既存ページ（内容更新）
| # | ページ | パス | 変更内容 |
|---|--------|------|----------|
| 1 | **ホーム** | `/ja` | 課題提起型に全面リニューアル。ペインポイントを並べてターゲットの共感を得る |
| 2 | **サービス一覧** | `/ja/services` | ターゲットを行政書士・登録支援機関・雇用企業に変更。サービスカテゴリの説明文を更新 |
| 3 | **相続・不動産** | `/ja/inheritance` | そのまま維持（変更なし） |
| 4 | **会社情報** | `/ja/company` | ターゲット記述を更新 |
| 5 | **お問い合わせ** | `/ja/contact` | フォームの業種ドロップダウンを更新（行政書士・登録支援機関・特定技能雇用企業追加） |

### 新規ページ：ターゲット別（3ページ）
| # | ページ | パス | 内容 |
|---|--------|------|------|
| 6 | **行政書士の方へ** | `/ja/for-scriveners` | 行政書士が抱えるフィリピン関連案件の課題と、IGRSがどう解決できるか。配偶者ビザ・帰化・在留資格変更でのフィリピン側書類取得、名前の表記揺れ対応など |
| 7 | **登録支援機関の方へ** | `/ja/for-support-org` | 登録支援機関が特定技能外国人をサポートする中で直面するフィリピン関連の課題。書類取得、免許切替支援、婚姻関連など |
| 8 | **特定技能 雇用企業の方へ** | `/ja/for-employers` | フィリピン人従業員を雇用する企業が直面する課題。免許切替で業務効率化、従業員の在留関連書類、婚姻手続きサポートなど |

### 新規ページ：ペインポイント別（3ページ）
| # | ページ | パス | 内容 |
|---|--------|------|------|
| 9 | **運転免許切替** | `/ja/drivers-license` | 「フィリピン人従業員に車の運転をさせられたら業務がもっと効率化しませんか？」免許切替に必要なフィリピン側書類（LTO）の取得を代行 |
| 10 | **フィリピン書類取得** | `/ja/ph-documents` | 「フィリピンでの書類取得に困っていませんか？」PSA・NBI・アポスティーユなど、ビザ申請・帰化・婚姻に必要な書類を現地で取得代行 |
| 11 | **名前の表記揺れ** | `/ja/name-discrepancy` | 「ビザ申請で名前の表記揺れがあって困っていませんか？」フィリピン人の苗字はスペル違い・改姓・ミドルネーム問題が頻発。PSA書類の照合・修正手続き支援 |

---

## ホームページ リニューアル内容

### Hero Section（課題提起型）
**アイキャッチ**: 「行政書士・登録支援機関・特定技能雇用企業の方へ」
**メインコピー**: 「フィリピン人材に関する "現地の壁"、 こんなことで困っていませんか？」
**サブコピー**: 課題提起の問いかけリスト:
- 「フィリピン人従業員に運転免許を取らせたいが、現地書類が取れない」
- 「ビザ申請に必要なフィリピン側書類の取得に時間がかかりすぎる」
- 「名前の表記揺れで入管に書類を弾かれた」
- 「帰化・婚姻手続きでフィリピン側の対応が止まっている」

### Service Cards（課題起点に変更）
現在の4カテゴリから、ペインポイント起点に再構成:
1. **運転免許切替** → `/ja/drivers-license`
2. **フィリピン書類取得** → `/ja/ph-documents`
3. **名前の表記揺れ対応** → `/ja/name-discrepancy`
4. **相続・不動産 初動対応** → `/ja/inheritance`（既存維持）

### Target Audience（3つのターゲットに特化）
- 行政書士事務所 → `/ja/for-scriveners`
- 登録支援機関 → `/ja/for-support-org`
- 特定技能 雇用企業 → `/ja/for-employers`

### Why IGRS / Flow / Disclaimer / CTA
- Why IGRS: 内容は微調整（ターゲット記述を更新）
- Flow: そのまま維持
- Disclaimer: そのまま維持
- CTA: そのまま維持

---

## ナビゲーション更新

### Header ナビゲーション
```
サービス一覧 | 対象の方へ（ドロップダウン）| 相続・不動産 | 会社情報 | [お問い合わせCTA]
```

「対象の方へ」ドロップダウン:
- 行政書士の方へ
- 登録支援機関の方へ
- 特定技能 雇用企業の方へ

### Footer ナビゲーション
全ページへのリンクを追加

---

## コンタクトフォーム更新

### 業種ドロップダウン変更
```
現在: 弁護士事務所 / 司法書士事務所 / 行政書士事務所 / 入管・ビザ事務所 / 不動産管理会社 / その他法人
↓
変更後: 行政書士事務所 / 登録支援機関 / 特定技能雇用企業 / 入管・ビザ事務所 / その他法人
```

### 案件カテゴリ変更
```
現在: 書類取得・アポスティーユ / 婚姻・在留関連 / 運転免許・LTO関連 / 相続・不動産 / その他
↓
変更後: 運転免許切替 / フィリピン書類取得（PSA・NBI等） / 名前の表記揺れ / 婚姻・在留関連 / 相続・不動産 / その他
```

---

## 実装順序

### Phase 1: コンテンツ更新（ja.json + 既存ページ）
1. `ja.json` のメタデータ・Hero・ターゲット・サービスカードのテキスト更新
2. ホームページのHeroSection・ServiceCards・TargetAudienceの内容変更
3. サービス一覧ページの内容更新
4. コンタクトフォームの業種・カテゴリ更新
5. 会社情報ページのターゲット記述更新

### Phase 2: 新規ページ作成（ペインポイント別）
6. `/ja/drivers-license` ページ作成
7. `/ja/ph-documents` ページ作成
8. `/ja/name-discrepancy` ページ作成

### Phase 3: 新規ページ作成（ターゲット別）
9. `/ja/for-scriveners` ページ作成
10. `/ja/for-support-org` ページ作成
11. `/ja/for-employers` ページ作成

### Phase 4: ナビゲーション更新
12. Header にドロップダウンメニュー追加
13. Footer のリンク更新
14. SEO メタデータ更新（sitemap.ts, robots.ts）

---

## ファイル変更一覧

### 変更するファイル
- `src/messages/ja.json` - 全テキスト更新
- `src/app/[locale]/page.tsx` - ホームページ構成更新
- `src/app/[locale]/services/page.tsx` - サービス一覧更新
- `src/app/[locale]/company/page.tsx` - 会社情報更新
- `src/app/[locale]/contact/page.tsx` - お問い合わせ更新
- `src/components/sections/HeroSection.tsx` - 課題提起型に変更
- `src/components/sections/ServiceCards.tsx` - ペインポイント起点に変更
- `src/components/sections/TargetAudience.tsx` - 3ターゲットに特化 + リンク追加
- `src/components/sections/WhyIGRS.tsx` - 微調整
- `src/components/layout/Header.tsx` - ドロップダウンメニュー追加
- `src/components/layout/Footer.tsx` - リンク追加
- `src/components/forms/ContactForm.tsx` - 業種・カテゴリ更新
- `src/lib/validations.ts` - フォームバリデーション更新
- `src/app/sitemap.ts` - 新規ページ追加

### 新規作成するファイル
- `src/app/[locale]/drivers-license/page.tsx`
- `src/app/[locale]/ph-documents/page.tsx`
- `src/app/[locale]/name-discrepancy/page.tsx`
- `src/app/[locale]/for-scriveners/page.tsx`
- `src/app/[locale]/for-support-org/page.tsx`
- `src/app/[locale]/for-employers/page.tsx`
