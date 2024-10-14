import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface CalendarViewProps {
    handleDayClick: (date: Date) => void;
    boletos: { dueDate: string }[];
}

const CalendarView: React.FC<CalendarViewProps> = ({ handleDayClick, boletos }) => {
    const tileContent = ({ date }: { date: Date }) => {
        const dayBoletos = boletos.filter(boleto => new Date(boleto.dueDate).toDateString() === date.toDateString());
        return dayBoletos.length > 0 ? (
            <span role="img" aria-label="boleto">
                📄
            </span>
        ) : null;
    };

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Calendário de Boletos</h3>
            <Calendar
                tileContent={tileContent}
                onClickDay={handleDayClick}
            />
        </div>
    );
};

export default CalendarView;
