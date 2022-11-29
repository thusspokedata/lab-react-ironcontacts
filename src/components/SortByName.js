export const SortByName = ({setContacts}) => {

    function sortNameClick() {
        setContacts((currentState) => [
          ...currentState.sort((a, b) => a.name.localeCompare(b.name)),
        ]);
      }
      
  return (
    <button
    className="btn-primary border-none p-5 ml-5"
    onClick={sortNameClick}
  >
    {" "}
    Sort by Name
  </button>
  )
}
