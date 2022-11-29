export const DeleteButton = ({setContacts, contact}) => {
    
    function deleteOnClick(id) {
        setContacts((curr) => [
          ...curr.filter((contact) => {
            return contact.id !== id;
          }),
        ]);
      }
    
  return (
    <button
        className="btn-danger mr-5 border-none p-5 ml-5"
        onClick={() => deleteOnClick(contact.id)}
    >
        Delete
    </button>
  )
}
