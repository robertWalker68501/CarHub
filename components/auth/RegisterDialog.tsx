'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '@/validation/auth.validation';
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
import useRegisterDialog from '@/hooks/use-register.dialog';
import useLoginDialog from '@/hooks/use-login-dialog';

export default function RegisterDialog() {
  const { open, onClose } = useRegisterDialog();
  const { onOpen } = useLoginDialog();

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      shopName: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof signupSchema>) => {
    console.log(values);
  };

  const handleLoginOpen = () => {
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
          <DialogTitle>Create an account</DialogTitle>
          <DialogDescription>
            Enter you details to register for an account
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-3'
          >
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='John Doe'
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
              name='shopName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Shop Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Beetle Designs co.'
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
              Register
            </Button>
          </form>
        </Form>

        <div className='mt-2 flex items-center justify-center'>
          <p className='text-sm text-muted-foreground'>
            Already have an account?{' '}
            <button
              className='!text-primary'
              onClick={handleLoginOpen}
            >
              Login
            </button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
