interface TodoPlaceholderProps {
  reason: string;
}

export function TodoPlaceholder({ reason }: TodoPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`TODO placeholder: ${reason}`}
      className="flex items-center justify-center rounded border-2 border-dashed border-yellow-400 bg-yellow-50 dark:bg-yellow-950/20 p-6 text-center"
    >
      <p className="text-sm text-yellow-700 dark:text-yellow-400">
        <span className="font-semibold">TODO:</span> {reason}
      </p>
    </div>
  );
}
