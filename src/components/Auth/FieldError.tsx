export const FieldError = ({ error }: { error?: string }) => {
  return (
    <div>
      error ? <div className="text-red-500 text-sm">{error}</div> : null;
    </div>
  );
};
