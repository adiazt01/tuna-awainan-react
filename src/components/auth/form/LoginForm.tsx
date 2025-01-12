import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@tanstack/react-router";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/services/auth";
import { useAuth } from "@/hooks/use-auth";
import { Loader } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AuthError, AuthInvalidCredentialsError } from "@supabase/supabase-js";

const loginSchema = z.object({
  email: z.string({
    required_error: 'Por favor, introduce tu email',
  }).email(),
  password: z.string({
    required_error: 'Por favor, introduce tu contraseña',
  }).min(6, {
    message: 'La contraseña debe tener al menos 6 caracteres',
  }),
})

export function LoginForm() {
  const { setSession } = useAuth()
  const { toast } = useToast()
  const loginMutation = useMutation({
    mutationFn: async (value: { email: string, password: string }) => {
      return login(value.email, value.password)
    },
  })

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validators: {
      onBlur: loginSchema
    },
    onSubmit: async ({ value }) => {
      try {
        const { session } = await loginMutation.mutateAsync(value)
        setSession(session)
        toast({
          title: 'Inicio de sesión exitoso',
          description: 'Bienvenido de vuelta!',
        })
      } catch (error: unknown) {
        if (error instanceof AuthError) {
          if ((error as any).code === "email_not_confirmed") {
            toast({
              title: 'Correo no confirmado',
              description: 'Por favor, confirma tu correo electrónico',
            });
          }
        }

        toast({
          title: 'Error al iniciar sesión',
          description: 'Inténtalo de nuevo',
        });
      }
    },
    onSubmitInvalid: () => {
      toast({
        title: 'Error al iniciar sesión',
        description: 'Inténtalo de nuevo',
      })
    }
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
      className="flex flex-col gap-6" >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">
          Bienvenido de vuelta! 👋
        </h1>
        <p className="text-balance text-sm text-muted-foreground">
          Inicia sesión para continuar
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <form.Field
            name="email"
            children={(field) => (
              <>
                <Label htmlFor="email">Email</Label>
                <Input
                  disabled={loginMutation.isPending}
                  name={field.name}
                  onBlur={field.handleBlur}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  id="email" type="email" placeholder="m@example.com" required />
              </>
            )}
          />
        </div>
        <div className="grid gap-2">
          <form.Field
            name="password"
            children={(field) => (
              <>
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  disabled={loginMutation.isPending}
                  name={field.name}
                  onBlur={field.handleBlur}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  id="password" type="password" placeholder="********" required />
              </>
            )}
          />
        </div>
        <Button
          disabled={loginMutation.isPending}
          type="submit" className="w-full">
          {
            loginMutation.isPending && (
              <>
                <Loader className="animate-spin" />
                {" "}
              </>
            )
          }
          Iniciar sesión
        </Button>
      </div>
      <div className="text-center text-sm">
        No tienes una cuenta?{' '}
        <Link to="/auth/register" className="underline underline-offset-4">
          Regístrate
        </Link>
      </div>
    </form>
  )
}