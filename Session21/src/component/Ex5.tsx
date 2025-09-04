export default function Ex5() {
  return (
<div className="relative w-96 h-48 bg-sky-100 border border-sky-300 rounded-xl p-4">
  <p className="text-sky-900">Relative parent</p>

  <div className="absolute bottom-0 left-0 mb-2 ml-2 bg-sky-600 text-white px-4 py-2 rounded-lg shadow-md">
    <p>Absolute child</p>
  </div>
</div>
  )
}
