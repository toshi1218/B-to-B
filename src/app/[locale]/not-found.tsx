import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 py-20 text-center">
      <p className="text-6xl font-bold text-gray-200">404</p>
      <h1 className="text-2xl font-bold text-gray-900">ページが見つかりません</h1>
      <p className="text-gray-600">お探しのページは存在しないか、移動した可能性があります。</p>
      <Link
        href="/ja"
        className="inline-flex items-center rounded bg-[#1a2846] px-6 py-3 text-sm font-medium text-white hover:bg-[#273c69] transition-colors"
      >
        トップページへ戻る
      </Link>
    </div>
  );
}
