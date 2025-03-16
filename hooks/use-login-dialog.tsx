import { useQueryState, parseAsBoolean } from 'nuqs';

export default function useLoginDialog() {
  const [open, setOpen] = useQueryState(
    'login',
    parseAsBoolean.withDefault(false)
  );

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return { open, onOpen, onClose };
}
