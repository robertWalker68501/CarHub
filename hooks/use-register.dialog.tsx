import { useQueryState, parseAsBoolean } from 'nuqs';

export default function useRegisterDialog() {
  const [open, setOpen] = useQueryState(
    'register',
    parseAsBoolean.withDefault(false)
  );

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return { open, onOpen, onClose };
}
