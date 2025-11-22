export function TodoSearch ({searchValue, setSearchValue}) {
  return (
    <>
      <input
        type="text"
        className="search"
        placeholder="🔍 검색어를 입력하세요..."
        value={searchValue}
        onChange={e=>setSearchValue(e.target.value)}
      />
    </>
  )
}