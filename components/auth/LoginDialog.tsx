'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/validation/auth.validation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import useLoginDialog from '@/hooks/use-login-dialog';
import useRegisterDialog from '@/hooks/use-register.dialog';

export default function LoginDialog() {
  const { open, onClose } = useLoginDialog();
  const { onOpen } = useRegisterDialog();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    console.log(values);
  };

  const handleRegisterOpen = () => {
    onClose();
    onOpen();
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogContent className='max-w-[350px] rounded-md p-8 sm:max-w-[450px]'>
        <DialogHeader>
          <DialogTitle>Login to your account</DialogTitle>
          <DialogDescription>
            Enter your email and password login
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-3'
          >
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='john.doe@mail.com'
                      {...field}
                      className='!h-10'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='********'
                      {...field}
                      className='!h-10'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              size='lg'
              className='w-full'
              type='submit'
            >
              Login
            </Button>
          </form>
        </Form>

        <div className='mt-2 flex items-center justify-center'>
          <p className='text-sm text-muted-foreground'>
            Don&apos;t have an account?{' '}
            <button
              className='!text-primary'
              onClick={handleRegisterOpen}
            >
              Register
            </button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
