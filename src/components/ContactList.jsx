export default function ContactList({ contacts, onSelect }) {
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button onClick={() => onSelect(contact.id)}>{contact.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
