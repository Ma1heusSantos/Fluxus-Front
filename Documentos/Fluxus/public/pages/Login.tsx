import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardHeader>
            <div className="flex items-center justify-center mb-6 gap-3">
                 <svg className="w-12 h-12 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 20V4m0 16h16M4 14l4-4 4 4 6-6" />
                </svg>
              
                <div className="flex flex-col">
                    <CardTitle className="text-3xl font-extrabold text-blue-600">
                    Fluxus
                    </CardTitle>
                    <p className="text-sm text-gray-500">
                    Sistema de controle de contas
                    </p>
                </div>
            </div>
          <p className="text-sm text-gray-500 text-center">
            Faça login para acessar o sistema de controle de contas
          </p>
        </CardHeader>

        <CardContent>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                className="w-full"
              />
            </div>

            <Button type="submit" className="w-full mt-2 bg-blue-600 text-white">
              Entrar
            </Button>

            {/* <p className="text-xs text-gray-500 text-center mt-2">
              Esqueceu a senha? <a href="#" className="text-blue-600 hover:underline">Recuperar</a>
            </p> */}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login
