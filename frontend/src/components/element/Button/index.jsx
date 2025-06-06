export default function Button({ children, classTambahan = "", url }) {
  return (
    <a
      href={`${url}`}
      className={`px-6 py-2 rounded-full bg-green-400 hover:bg-green-500 ${classTambahan} `}
    >
      {children}
    </a>
  );
}
