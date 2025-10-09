"use client"

import { IUsuario } from "@/models/Usuario"
import { useEffect, useState, FormEvent } from "react"

export default function DashboardAdmin() {
    // --- Estados para a lista de usuários ---
    const [usuarios, setUsuarios] = useState<IUsuario[]>([]);
    const [loading, setLoading] = useState(true);

    // --- Estados para o formulário de cadastro ---
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [funcao, setFuncao] = useState('tecnico'); // Valor padrão
    const [formError, setFormError] = useState('');
    const [formSuccess, setFormSuccess] = useState('');

    useEffect(() => {
        fetchUsuarios();
    }, []);

    const fetchUsuarios = async () => {
        try {
            setLoading(true);
            const resposta = await fetch("/api/usuarios");
            const data = await resposta.json();
            if (data.success) {
                setUsuarios(data.data);
            }
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCadastroSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setFormError('');
        setFormSuccess('');

        try {
            const resposta = await fetch("/api/usuarios", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nome, email, senha, funcao }),
            });

            const data = await resposta.json();

            if (data.success) {
                setFormSuccess("Usuário cadastrado com sucesso!");
                // Limpa o formulário
                setNome('');
                setEmail('');
                setSenha('');
                setFuncao('tecnico');

                fetchUsuarios();
            } else {
                setFormError(data.error || "Erro ao cadastrar usuário.");
            }
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
            setFormError("Ocorreu um erro no servidor. Tente novamente.");
        }
    };

    return (
        <div>
            <div>
                <h3>Cadastrar Novo Usuário</h3>
                <form onSubmit={handleCadastroSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', marginBottom: '40px' }}>
                    <input
                        type="text"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                    <select value={funcao} onChange={(e) => setFuncao(e.target.value)}>
                        <option value="tecnico">Técnico</option>
                        <option value="gerente">Gerente</option>
                        <option value="admin">Admin</option>
                    </select>
                    <button type="submit">Cadastrar</button>
                    {formSuccess && <p style={{ color: 'green' }}>{formSuccess}</p>}
                    {formError && <p style={{ color: 'red' }}>{formError}</p>}
                </form>
            </div>

            <hr />


            <div>
                <h3>Usuários do Sistema</h3>
                {loading ? <p>Carregando...</p> : (
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Função</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario) => (
                                <tr key={usuario._id}>
                                    <td>{usuario.nome}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.funcao}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}