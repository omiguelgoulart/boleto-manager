import { useState, useEffect } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import BoletoForm from './BoletoForm';
import BoletoList from './BoletoList';
import NotificationList from './NotificationList';
import CalendarView from './CalendarView';

const BoletoManager = () => {
  const [boletos, setBoletos] = useState([
    { id: 1, dueDate: '2024-10-16', description: 'Boleto de Internet', status: 'pendente', comprovante: null as File | null },
    { id: 2, dueDate: '2024-10-20', description: 'Boleto de Luz', status: 'pendente', comprovante: null as File | null },
    { id: 3, dueDate: '2024-10-25', description: 'Boleto de Aluguel', status: 'pago', comprovante: null as File | null },
  ]);
  
  const [notifications, setNotifications] = useState<{ id: number; dueDate: string; description: string; status: string; comprovante: File | null }[]>([]);
  const [isFormModalOpen, setFormModalOpen] = useState(false);
  const [isDayModalOpen, setDayModalOpen] = useState(false);
  const [selectedDayBoletos, setSelectedDayBoletos] = useState<{ id: number; dueDate: string; description: string; status: string; comprovante: File | null }[]>([]);
  
  // Unificação de file e pdfFile em apenas pdfFile
  const [newBoleto, setNewBoleto] = useState({
    description: '',
    dueDate: '',
    status: 'pendente',
    pdfFile: null as File | null, // Usar apenas pdfFile
  });

  const today = new Date();

  useEffect(() => {
    updateNotifications();
  }, [boletos]);

  const updateNotifications = () => {
    const upcomingBoletos = boletos.filter(({ dueDate, status }) => {
      const boletoDate = new Date(dueDate);
      const diffInDays = (boletoDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
      return diffInDays <= 7 && diffInDays >= 0 && status === 'pendente';
    });
    setNotifications(upcomingBoletos);
  };

  const handleDayClick = (date: Date) => {
    const dayBoletos = boletos.filter(({ dueDate }) => new Date(dueDate).toDateString() === date.toDateString());
    setSelectedDayBoletos(dayBoletos);
    setDayModalOpen(true);
  };

  const markAsPaid = (id: number, comprovante: File | null = null) => {
    setBoletos((prevBoletos) =>
      prevBoletos.map((boleto) => (boleto.id === id ? { ...boleto, status: 'pago', comprovante } : boleto))
    );
  };

  const handleComprovanteChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const file = e.target.files?.[0] || null;
    markAsPaid(id, file);
  };

  const addBoleto = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newId = boletos.length + 1;
    setBoletos([...boletos, { id: newId, ...newBoleto, comprovante: null }]);
    setNewBoleto({ description: '', dueDate: '', status: 'pendente', pdfFile: null });
    setFormModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center p-6">
      <h2 className="text-xl font-bold mb-4">Gerenciar Boletos</h2>

      <button
        onClick={() => setFormModalOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition"
      >
        Adicionar Boleto
      </button>

      <Modal open={isFormModalOpen} onClose={() => setFormModalOpen(false)} center>
        <BoletoForm newBoleto={newBoleto} setNewBoleto={setNewBoleto} addBoleto={addBoleto} />
      </Modal>

      <Modal open={isDayModalOpen} onClose={() => setDayModalOpen(false)} center>
        <BoletoList boletos={selectedDayBoletos} handlePago={markAsPaid} handleComprovanteChange={handleComprovanteChange} />
      </Modal>

      <NotificationList notifications={notifications} />

      <CalendarView handleDayClick={handleDayClick} boletos={boletos} />
    </div>
  );
};

export default BoletoManager;
