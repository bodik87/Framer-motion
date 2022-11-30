interface ErrorProps {
  error: string;
}

export const Error = ({ error }: ErrorProps) => {
  return <div className="text-center text-red-700">{error}</div>;
};
