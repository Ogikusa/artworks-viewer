export default function NoWorksFound({query}: {query?: string}) {
  return (
    <div className="h-full w-full flex justify-center items-center flex-col -translate-y-16 pointer-events-none">
      <h2 className="text-2xl">何もなし</h2>
      {query && <p className="flex">検索クエリ「<span className="max-w-[8em] sm:max-w-sm overflow-hidden text-ellipsis whitespace-nowrap">{query}</span>」の</p>}
      <p>検索結果がありません</p>
    </div>
  );
}
