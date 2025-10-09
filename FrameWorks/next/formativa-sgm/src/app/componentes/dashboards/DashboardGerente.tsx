"use client"

import { IEquip } from "@/models/Equipamento"
import { IOrdem } from "@/models/OrdemServico"
import { useEffect, useState } from "react"

export default function DashboardGerente() {
    const [ordens, setOrdens] = useState<IOrdem[]>([])
    const [equipamentos, setEquipamentos] = useState<IEquip[]>([])

    useEffect(() => {
        fetchOrdens()
        fetchEquipamentos()
    }, [])


    const fetchOrdens = async () => {
        try {
            const resposta = await fetch("/api/ordemservico")
            const data = await resposta.json()
            if (data.success) {

                const ordensComDatas = data.data.map((ordem: any) => ({
                    ...ordem,
                    dataSolicitada: new Date(ordem.dataSolicitada),
                    dataFinalizada: ordem.dataFinalizada ? new Date(ordem.dataFinalizada) : null
                }))
                setOrdens(ordensComDatas)
            }
        } catch (error) {
            console.error("Erro ao buscar ordens de serviço:", error);
        }
    }

    const fetchEquipamentos = async () => {
        try {
            const resposta = await fetch("/api/equipamento")
            const data = await resposta.json()
            if (data.success) {
                setEquipamentos(data.data)
            }
        } catch (error) {
            console.error("Erro ao buscar equipamentos:", error);
        }
    }

    return (
        <div>
            <h3>Ordens de Serviço Ativas</h3>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Status</th>
                        <th>Tipo de Manutenção</th>
                        <th>Data de Solicitação</th>
                        <th>Data de Finalização</th>
                        <th>ID Equipamento</th>
                        <th>ID Técnico</th>
                    </tr>
                </thead>
                <tbody>
                    {ordens.map((ordem) => (
                        <tr key={ordem._id}>
                            <td>{ordem.titulo}</td>
                            <td>{ordem.descricao}</td>
                            <td>{ordem.status}</td>
                            <td>{ordem.tipoManutencao}</td>
                            <td>{ordem.dataSolicitada.toLocaleDateString()}</td>
                            <td>{ordem.dataFinalizada?.toLocaleDateString() || 'Pendente'}</td>
                            <td>{ordem.idEquipamento}</td>
                            <td>{ordem.idTecnico}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <hr style={{ margin: '40px 0' }} />

            <h3>Equipamentos Cadastrados</h3>
            <table>
                <thead>
                    <tr>
                        <th>Modelo</th>
                        <th>Marca</th>
                        <th>Localização</th>
                        <th>Status</th>
                        <th>Número de Série</th>
                    </tr>
                </thead>
                <tbody>
                    {equipamentos.map((equip) => (
                        <tr key={equip._id}>
                            <td>{equip.modelo}</td>
                            <td>{equip.marca}</td>
                            <td>{equip.localizacao}</td>
                            <td>{equip.status}</td>
                            <td>{equip.numSerie}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}