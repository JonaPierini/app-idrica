export const Spinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 bg-gray-800 z-50">
      <div className="w-16 h-16 border-4 border-t-4 border-blue-600 border-solid rounded-full animate-spin"></div>
    </div>
  );
};
