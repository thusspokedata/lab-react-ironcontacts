export const SortByPop = ({setContacts}) => {

    function sortPopClick() {
        setContacts((currentState) => [
          ...currentState.sort((a, b) => b.popularity - a.popularity),
        ]);
      }
      
  return (
    <button
    className="btn-primary border-none p-5 ml-5 "
    onClick={sortPopClick}
  >
    {" "}
    Sort by Popularity
  </button>
  )
}
