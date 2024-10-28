export default function BuildWith ({ build }) {
  return (
    <li className="my-1 mr-1.5">
      <div className="flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors border-transparent bg-aquamarine/10 text-aquamarine">
        { build }
      </div>
    </li>
  )
}