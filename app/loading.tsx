export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary-50 via-white to-primary-50">
      <div className="text-center">
        <div className="inline-block relative">
          <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-secondary-600 font-medium">Loading...</p>
      </div>
    </div>
  );
}
