const ContactCard = ({ icon, title, info }) => {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <div className="text-4xl text-orange-500 mb-4">{icon}</div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{info}</p>
    </div>
  );
};

export default ContactCard;
