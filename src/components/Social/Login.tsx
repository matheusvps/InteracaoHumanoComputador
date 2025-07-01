import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';

interface LoginProps {
  onSwitchToRegister: () => void;
}

const Login: React.FC<LoginProps> = ({ onSwitchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login, resetPassword } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const success = await login(email, password);
      if (success) {
        toast.success('Login realizado com sucesso!');
      } else {
        toast.error('Email ou senha incorretos!');
      }
    } catch {
      toast.error('Erro ao fazer login');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      toast.error('Digite seu email primeiro');
      return;
    }
    setIsLoading(true);
    try {
      await resetPassword(email);
      toast.success('Email de recuperação enviado!');
    } catch {
      toast.error('Erro ao enviar email de recuperação');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-purple-500 to-indigo-600">
      <div className="w-full max-w-md min-h-[480px] flex flex-col justify-center p-8 bg-white rounded-2xl shadow-2xl border border-green-300">
        <div>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-green-800">
            Entrar na sua conta
          </h2>
          <p className="mt-2 text-center text-sm text-green-700">
            Acesse sua conta para conectar com amigos
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-green-900">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-green-300 placeholder-green-400 text-green-900 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-green-50 transition"
                placeholder="Digite seu email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-green-900">
                Senha
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-3 py-2 pr-10 border border-green-300 placeholder-green-400 text-green-900 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-green-50 transition"
                  placeholder="Digite sua senha"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-green-600 hover:text-green-800"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <button
              type="button"
              onClick={handleResetPassword}
              disabled={isLoading}
              className="text-sm text-green-700 hover:text-green-900 disabled:opacity-50 font-semibold underline transition"
            >
              Esqueci minha senha
            </button>
          </div>
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-base font-bold rounded-lg text-white bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 shadow-lg transition-all duration-200"
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </button>
          </div>
          <div className="text-center mt-2">
            <button
              type="button"
              onClick={onSwitchToRegister}
              className="text-sm text-green-700 hover:text-green-900 font-semibold underline transition"
            >
              Não tem uma conta? Cadastre-se
            </button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-green-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-green-500">Dados de teste</span>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-green-700">
            <p>Email: teste@teste.com</p>
            <p>Senha: 123456</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 