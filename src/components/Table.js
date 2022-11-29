import { DeleteButton } from "./"

export const Table = ({contacts, setContacts}) => {

  return (
    <table>
          <thead className="thead">
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt="some alt" height="120px" />
                </td>
                <td>
                  <h2>{contact.name}</h2>
                </td>
                <td>
                  <h3>{contact.popularity}</h3>
                </td>
                <td>
                  <h2>{contact.wonOscar === true && <p>🏆</p>}</h2>
                </td>
                <td>
                  <h2>{contact.wonEmmy && <p>🏆</p>}</h2>
                </td>
                <td cla>
                  <h2>
                    <DeleteButton setContacts={setContacts} contact={contact} />
                  </h2>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  )
}
