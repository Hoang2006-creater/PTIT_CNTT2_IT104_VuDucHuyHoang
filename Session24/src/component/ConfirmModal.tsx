interface Props {
  onClose: () => void;
  onConfirm: () => void;
}

export default function ConfirmModal({ onClose, onConfirm }: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <div className="bg-white p-6 rounded shadow-lg text-center">
        <h3 className="text-lg font-semibold mb-4">Bạn có chắc muốn xóa?</h3>
        <div className="flex justify-center gap-4">
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Xóa
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
}
