import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
import { register } from "@/services/auth";
import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { Loader } from "lucide-react";
import { z } from "zod";

const registerSchema = z.object({
    email: z.string({
        required_error: 'Por favor, introduce tu email',
    }).email(),
    password: z.string({
        required_error: 'Por favor, introduce tu contraseña',
    }).min(6, {
        message: 'La contraseña debe tener al menos 6 caracteres',
    }),
    username: z.string({
        required_error: 'Por favor, introduce tu nombre de usuario',
    }).min(3, {
        message: 'El nombre de usuario debe tener al menos 3 caracteres',
    }),
})

export function RegisterForm() {
    const { setSession } = useAuth()
    const { toast } = useToast()
    const registerMutation = useMutation({
        mutationFn: async (value: { email: string, password: string, username: string }) => {
            return register(value.email, value.password, value.username)
        },
    })

    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
            username: '',
        },
        validators: {
            onBlur: registerSchema
        },
        onSubmit: async ({ value }) => {
            try {
                const { session } = await registerMutation.mutateAsync(value)
                setSession(session)
                toast({
                    title: 'Registro exitoso',
                    description: 'Bienvenido!',
                })
            } catch (error: unknown) {
                toast({
                    title: 'Error al registrarse',
                    description: 'Inténtalo de nuevo',
                });
            }
        },
        onSubmitInvalid: () => {
            toast({
                title: 'Error al registrarse',
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
          Unete a nuestra maravillosa comunidad! 🚀
        </h1>
        <p className="text-balance text-sm text-muted-foreground">
          Regístrate para empezar a compartir tus ideas  y opiniones con el mundo
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <form.Field
            name="username"
            children={(field) => (
              <>
                <Label htmlFor="username">Nombre de usuario</Label>
                <Input
                  disabled={registerMutation.isPending}
                  name={field.name}
                  onBlur={field.handleBlur}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  id="username" type="text" placeholder="mario" required />
              </>
            )}
          />
        </div>
        <div className="grid gap-2">
          <form.Field
            name="email"
            children={(field) => (
              <>
                <Label htmlFor="email">Email</Label>
                <Input
                  disabled={registerMutation.isPending}
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
                  disabled={registerMutation.isPending}
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
          disabled={registerMutation.isPending}
          type="submit" className="w-full">
          {
            registerMutation.isPending && (
              <>
                <Loader className="animate-spin" />
                {" "}
              </>
            )
          }
          Regístrate
        </Button>
      </div>
      <div className="text-center text-sm">
        Ya tienes una cuenta?{' '}
        <Link to="/auth/login" className="underline underline-offset-4">
          Inicia sesión
        </Link>
      </div>
    </form>
    )
}