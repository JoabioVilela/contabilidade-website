const WhatsAppButton = () => {
    const phoneNumber = "5571996137000";
    const message = "Olá, Aldo. Vim pelo website da Kab Contabilidade.";
  
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    return (
      <a href={whatsappURL} className="whatsapp-button" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp" />
        Contate-nos no WhatsApp
      </a>
    );
  };
  
  export default WhatsAppButton;