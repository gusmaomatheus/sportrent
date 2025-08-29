import type { ChangeEvent, FC, FormEvent } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/form/Button';
import Input from '../../components/ui/form/Input';
import PasswordInput from '../../components/ui/form/PasswordInput';

const SignUpPage: FC = () => {
    const initialFormData = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };
    const [formData, setFormData] = useState(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCancel = (): void => {
        setFormData(initialFormData);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }

        setIsSubmitting(true);

        // ! REMOVER DEPOIS QUE A API ESTIVER PRONTA!!
        // simular uma resposta da api
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log('Dados do Cadastro:', formData);
        setIsSubmitting(false);
    };

    return (
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-900">
                Crie sua conta
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="flex gap-4">
                    <Input
                        label="Nome"
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="Fred"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        disabled={isSubmitting}
                    />
                    <Input
                        label="Sobrenome"
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Baldwin"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        disabled={isSubmitting}
                    />
                </div>
                <Input
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="sportrent@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                />
                <PasswordInput
                    label="Senha"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="SportRent"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    disabled={isSubmitting}
                />
                <PasswordInput
                    label="Confirmar Senha"
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="SportRent"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    disabled={isSubmitting}
                />
                <div className="space-y-3 pt-2">
                    <Button type="submit" variant="primary" disabled={isSubmitting}>
                        {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
                    </Button>
                    <Button type="button" variant="common" onClick={handleCancel} disabled={isSubmitting}>
                        Cancelar
                    </Button>
                </div>
            </form>
            <p className="text-sm text-center text-gray-600">
                Já tem uma conta?{' '}
                <Link to="/login" className="font-medium text-emerald-600 hover:text-emerald-500">
                    Entrar
                </Link>
            </p>
        </div>
    );
};

export default SignUpPage;