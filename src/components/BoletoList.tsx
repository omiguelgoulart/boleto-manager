interface Boleto {
    id: number;
    description: string;
    dueDate: string;
    status: string;
    comprovante: File | null;
}

interface BoletoListProps {
    boletos: Boleto[];
    handlePago: (id: number, comprovante: File | null) => void;
    handleComprovanteChange: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
}

const BoletoList: React.FC<BoletoListProps> = ({ boletos, handlePago, handleComprovanteChange }) => {
    if (boletos.length === 0) {
        return <p>Nenhum boleto para esta data.</p>;
    }

    return (
        <div className="p-4">
            <h3 className="text-lg font-semibold mb-4">Boletos do Dia</h3>
            <table className="w-full table-auto border-collapse">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Descrição</th>
                        <th className="border px-4 py-2">Data de Vencimento</th>
                        <th className="border px-4 py-2">Status</th>
                        <th className="border px-4 py-2">Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {boletos.map((boleto) => (
                        <tr key={boleto.id}>
                            <td className="border px-4 py-2">{boleto.description}</td>
                            <td className="border px-4 py-2">{boleto.dueDate}</td>
                            <td className="border px-4 py-2">
                                {boleto.status === 'pago' ? (
                                    <span className="text-green-500">Pago</span>
                                ) : (
                                    <span className="text-yellow-500">Pendente</span>
                                )}
                            </td>
                            <td className="border px-4 py-2">
                                {boleto.status === 'pendente' ? (
                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() => handlePago(boleto.id, null)}
                                            className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
                                        >
                                            Marcar como Pago
                                        </button>
                                        <input
                                            type="file"
                                            accept="application/pdf"
                                            onChange={(e) => handleComprovanteChange(e, boleto.id)}
                                            className="border p-1 rounded"
                                        />
                                    </div>
                                ) : (
                                    <span className="text-green-500">-</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BoletoList;
