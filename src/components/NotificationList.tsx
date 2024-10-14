interface NotificationListProps {
    notifications: { id: number; description: string; dueDate: string }[];
}

const NotificationList: React.FC<NotificationListProps> = ({ notifications }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md mb-6 mt-6">
            <h3 className="text-lg font-semibold mb-4">Boletos a Vencer</h3>
            {notifications.length > 0 ? (
                <ul>
                    {notifications.map((boleto) => (
                        <li key={boleto.id} className="mb-2">
                            <strong>{boleto.description}</strong> vence em {boleto.dueDate}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">Nenhum boleto a vencer nos próximos dias.</p>
            )}
        </div>
    );
};

export default NotificationList;
