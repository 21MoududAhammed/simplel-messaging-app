export default function Chat({ contact, onMessage, onClearTextarea }) {
  return (
    <div>
      <textarea
        value={contact.message}
        onChange={(e) => onMessage({ ...contact, message: e.target.value })}
        placeholder={`for ${contact.name}`}
      ></textarea>
      <br />
      <button
        onClick={() => {
          onClearTextarea();
          alert(`${contact.message} is for ${contact.email}`);
        }}
      >
        Send {contact.email}
      </button>
    </div>
  );
}
