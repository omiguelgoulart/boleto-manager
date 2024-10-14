import React from 'react';

interface BoletoFormProps {
  newBoleto: {
    description: string;
    dueDate: string;
    status: string;
    pdfFile: File | null; // Apenas File ou null, sem undefined
  };
  setNewBoleto: React.Dispatch<React.SetStateAction<{
    description: string;
    dueDate: string;
    status: string;
    pdfFile: File | null; // Apenas File ou null
  }>>;
  addBoleto: (e: React.FormEvent<HTMLFormElement>) => void;
}

const BoletoForm: React.FC<BoletoFormProps> = ({ newBoleto, setNewBoleto, addBoleto }) => {
  // Função para lidar com o upload do arquivo PDF
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setNewBoleto({ ...newBoleto, pdfFile: file });
  };

  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-4">Adicionar Boleto</h3>

      <form onSubmit={addBoleto}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Descrição</label>
          <input
            type="text"
            value={newBoleto.description}
            onChange={(e) => setNewBoleto({ ...newBoleto, description: e.target.value })}
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
            placeholder="Ex: Boleto de Internet"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Data de Vencimento</label>
          <input
            type="date"
            value={newBoleto.dueDate}
            onChange={(e) => setNewBoleto({ ...newBoleto, dueDate: e.target.value })}
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Status</label>
          <select
            value={newBoleto.status}
            onChange={(e) => setNewBoleto({ ...newBoleto, status: e.target.value })}
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
          >
            <option value="pendente">Pendente</option>
            <option value="pago">Pago</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Anexar PDF do Boleto</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
        >
          Adicionar Boleto
        </button>
      </form>
    </div>
  );
};

export default BoletoForm;
