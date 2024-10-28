import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { signUp as signUpApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user.user);
      navigate('/dashboard', { replace: true });
      toast.success(
        'User created successfully! Please verify the new account from the user email'
      );
    },
  });

  return { signup, isLoading };
}
