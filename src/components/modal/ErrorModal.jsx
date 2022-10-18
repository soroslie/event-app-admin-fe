import CancelModalButton from './CancelModalButton';
import ModalLayout from './ModalLayout';
import ErrorCard from '../ErrorCard';

function ErrorModal({
  show,
  message,
  onCloseModal,
}) {
  if (!show) {
    return null;
  }

  return (
    <ModalLayout title="error">
      <div className="p-6 space-y-6">
        <ErrorCard message={message} />
      </div>
      <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200">
        <CancelModalButton onClick={onCloseModal} />
      </div>
    </ModalLayout>
  );
}

export default ErrorModal;
