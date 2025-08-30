export default function ContactForm() {
  return (
    <form className="max-w-md mx-auto flex flex-col gap-4">
      <input type="text" placeholder="Name" className="p-2 border" />
      <input type="email" placeholder="Email" className="p-2 border" />
      <textarea placeholder="Message" className="p-2 border"></textarea>
      <button type="submit" className="bg-pink-600 text-white p-2 font-bold">
        Send
      </button>
    </form>
  );
}
